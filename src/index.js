import React, { Component } from "react";
import ReactDom from "react-dom";
import CardList from './components/cardList';
import TabPanel from './components/tabPanel';
import { DebounceInput } from "react-debounce-input";
import MovieSearch from "./components/movie-search";
import Loader from './components/loader';
import "./index.css";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    data: [],
    value: "",
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
  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
    const { value } = this.state;
    if (value) {
      new MovieSearch().getMovie(value).then((body) => {
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
        this.setState({ data: newData });
      });
    } else {
      this.setState({ data: [] });
    }
  };

  render() {
    const { data } = this.state;
   
    return (
      <div className="main">
        <TabPanel />
        <DebounceInput
          minLength={1}
          debounceTimeout={100}
          onChange={this.onChangeHandler}
        />
       <CardList data={data} />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
