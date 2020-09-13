import React, { Component } from "react";
import ReactDom from "react-dom";
import { DebounceInput } from "react-debounce-input";
import MovieSearch from "./components/movie-search";
import { Rate } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;
console.log(Tabs, TabPane);
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
        console.log(needArr);
        const newData = needArr.map((item) => {
          console.log(typeof item.release_date);
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
    const elements = data.map((item) => {
      {
        console.log(item);
      }
      return (
        <li key={item.id} className="content">
          <div className="content-img">
            {" "}
            <img
              alt={item.title}
              src={`http://image.tmdb.org/t/p/w440_and_h660_face/${item.poster}`}
              width={150} className='content-img-el'
            />
          </div>

          <div className="content-desc">
            <header className="content-desc-header">
              <h1> {item.title}</h1>
              <span className="content-desc-header-rate">
                <span>{item.rate}</span>
              </span>
            </header>
            <div className="content-desc-date">{item.date}</div>
            <div className="content-desc-genre"></div>
            <div className="content-desc-overview">{item.desk}</div>

            <div className="content-desc-stars">
              <Rate allowHalf={true} count={9} defaultValue={item.rate} />
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="main">
        <Tabs centered={true} defaultActiveKey="2">
          <TabPane tab={<span>Tab 1</span>} key="1">
            Tab 1
          </TabPane>
          <TabPane tab={<span>Tab 2</span>} key="2">
            Tab 2
          </TabPane>
        </Tabs>
        <DebounceInput
          minLength={1}
          debounceTimeout={100}
          onChange={this.onChangeHandler}
        />
        <ul className="list-content">{elements}</ul>
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
