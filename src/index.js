import React, { Component } from "react";
import ReactDom from "react-dom";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";
import MovieSearch from "./components/movie-search";
import "./index.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const guest_session_id = new MovieSearch().getSession().then((res) => {
  sessionStorage.setItem("guest_session_id", res.guest_session_id);
});
class App extends Component {
  state = {
    data: [],
    value: "",
    isError: false,
    totalResults: 0,
    currentPage: 1,
    rated: [],
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
  onError = () => {
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
    new MovieSearch().getGenres().then((res) => {
      this.setState({ genres: res.genres });
    });
    new MovieSearch().getSession().then((res) => {
      this.setState({guest_session_id: res.guest_session_id})
    });
   
  }
  rateFilms = (item) => {
    item.then(res => {
    
      this.setState({rated: res.results})
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
      genres,
      rated,
      guest_session_id
    } = this.state;
    
console.log(rated);
    const numberPages = Math.floor(totalResults / 20);
    return (
      <div className="main">
        <Tabs centered={true} defaultActiveKey="1">
          <TabPane tab={<span>Search</span>} key="1">
            <Tab1
              onChangeHandler={this.onChangeHandler}
              value={value}
              genres={genres}
              data={data}
              loading={loading}
              onClose={this.onClose}
              isError={isError}
              totalResults={totalResults}
              numberPages={numberPages}
              nextPage={this.nextPage}
              currentPage={currentPage}
              rateFilms={this.rateFilms}
              session={guest_session_id}
            />
          </TabPane>
          <TabPane tab={<span onClick={()=> this.rateFilms(new MovieSearch().getRatedFilms(guest_session_id))}>Rated</span>}  key="2">
            <Tab2
              genres={genres}
              rated={rated}
              loading={loading}
              isError={isError}
              />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
