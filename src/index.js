import React, { Component } from "react";
import ReactDom from "react-dom";
import CardList from "./components/cardList";
import TabPanel from "./components/tabPanel";
import { DebounceInput } from "react-debounce-input";
import MovieSearch from "./components/movie-search";
import "./index.css";
import "antd/dist/antd.css";
import Pagination from "./components/pagination";
import { GenreProvider } from "./components/genres-context/genres-context";


class App extends Component {
  state = {
    data: [],
    value: "",
    isError: false,
    totalResults: 0,
    currentPage: 1,
  };
  nextPage = (pageNumber) => {
    const { value } = this.state;
    if (value) {
      new MovieSearch()
        .getMovie(value, pageNumber)
        .then((body) => {
          console.log(body);
          const needArr = body.results;
          const newData = needArr.map((item) => {
            return this.createItem(
              item.id,
              item.original_title,
              item.release_date,
              item.genre_ids,
              item.overview,
              item.vote_count,
              item.vote_average,
              item.poster_path
            );
          });

          this.setState((state) => {
            return {
              data: newData,
              loading: false,
              currentPage: pageNumber,
            };
          });
          if (newData.length === 0) {
            throw new Error("Not Found");
          }
        })
        .catch(this.onError);
    } else {
      this.setState({ data: [], loading: false });
    }
  };
  createItem(id, title, date, genre, desk, stars, rate, poster) {
    return {
      id,
      title,
      date,
      genre,
      desk,
      stars,
      rate,
      poster,
    };
  }
  onError = (err) => {
    this.setState({ isError: true });
  };
  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
    const { value } = this.state;
    this.setState({ loading: true });
    if (value) {
      new MovieSearch()
        .getMovie(value)
        .then((body) => {
          console.log(body);
          const needArr = body.results;
          const newData = needArr.map((item) => {
            return this.createItem(
              item.id,
              item.original_title,
              item.release_date,
              item.genre_ids,
              item.overview,
              item.vote_count,
              item.vote_average,
              item.poster_path
            );
          });
          this.setState((state) => {
            return {
              data: newData,
              loading: false,
              totalResults: body.total_results,
            };
          });
          if (newData.length === 0) {
            throw new Error("Not Found");
          }
        })
        .catch(this.onError);
    } else {
      this.setState({ data: [], loading: false });
    }
  };
  onClose = () => {
    this.setState({ value: "", isError: false });
  };
  
componentDidMount() {
  new MovieSearch().getGenres()
  .then(res => {
    this.setState({genres:res.genres})
  })
}
  render() {
    const {
      data,
      loading,
      isError,
      value,
      totalResults,
      currentPage,
      genres
    } = this.state;
    const numberPages = Math.floor(totalResults / 20);
    return (
      <div className="main">
        <TabPanel />
        <DebounceInput
          minLength={1}
          debounceTimeout={100}
          onChange={this.onChangeHandler}
          onInput={this.checkLoader}
          value={value}
        />
          <GenreProvider value={genres}>  <CardList
          data={data}
          loading={loading}
          onClose={this.onClose}
          isError={isError}
        /></GenreProvider>
      
        
        {totalResults > 20 ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={currentPage}
          />
        ) : null}
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
