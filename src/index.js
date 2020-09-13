import React, { Component } from "react";
import ReactDom from "react-dom";
import { DebounceInput } from "react-debounce-input";
import MovieSearch from "./components/movie-search";
import { List, Card } from "antd";
import {formatISO} from 'date-fns';
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
    e.preventDefault();
    this.setState({ value: e.target.value });
    const { value } = this.state;
    new MovieSearch().getMovie(value).then((body) => {
      const needArr = body.results;
      console.log(needArr);
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
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <DebounceInput
          minLength={1}
          debounceTimeout={100}
          onChange={this.onChangeHandler}
        />
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card
                extra={
                  <div className="content">
                    <div className="content-img">
                      {" "}
                      <img
                        alt={item.title}
                        src={`http://image.tmdb.org/t/p/w440_and_h660_face/${item.poster}`}
                        width={150}
                      />
                    </div>
                   
                    <div className="content-desc">
                      <header className="content-desc-header">
                        <h1> {item.title}</h1>
                        <span>{item.vote_count}</span>
                      </header>
                      <div className="content-desc-date">
                  {item.release_date.getDay()}
                  {console.log(item.release_date)}
                      </div>
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
