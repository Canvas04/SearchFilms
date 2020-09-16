import React, { Component } from "react";
import ReactDom from "react-dom";
import CardList from "./components/cardList";
import TabPanel from "./components/tabPanel";
import { DebounceInput } from "react-debounce-input";
import MovieSearch from "./components/movie-search";
import "./index.css";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    data: [],
    value: "",
    isError: false,
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
    this.setState({value: '',isError:false})
    
  }
  render() {
    const { data, loading, isError ,value} = this.state;
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

        <CardList data={data}  loading={loading} onClose={this.onClose} isError={isError} />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
// Смотри в кард Лист , там проблема какая то