import React, { Component } from "react";
import ReactDom from "react-dom";
import { Input } from "antd";
import { Card } from "antd";
import {DebounceInput} from 'react-debounce-input';
import MovieSearch from "./components/movie-search";
class App extends Component {
  state = {
    date: [],
    value: ''
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
    this.setState({value: e.target.value})
    new MovieSearch().getMovie(this.state.value)
  }
  render() {
    return (
      <div>
        <DebounceInput
          minLength={2}
          debounceTimeout={400}
          onChange={this.onChangeHandler} />
 
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
