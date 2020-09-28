import React from "react";
import { Rate as Stars } from "antd";
import Genre from "../genres";
import Rate from "../rate";
import { GenreProvider } from "../genres-context";

export default function Tab2({ genres, rated, loading, isError }) {
  const elements = rated.map((item) => {

      return (
        <li key={item.id} className="content">
          <div className="content-img">
            {" "}
            <img
              alt={item.title}
              src={`http://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}`}
              width={150}
              className="content-img-el"
            />
          </div>

          <div className="content-desc">
            <header className="content-desc-header">
              <h1> {item.original_title}</h1>
              <Rate rate={item.rating} />
            </header>
            <div className="content-desc-date">{item.release_date}</div>
            <div className="content-desc-genre">
              <GenreProvider value={genres}>
                <Genre id={item.genre_ids} />
              </GenreProvider>
            </div>
            <div className="content-desc-overview">{item.overview}</div>

            <div className="content-desc-stars">
              <Stars allowHalf={true} count={9} defaultValue={item.vote_average} />
            </div>
          </div>
        </li>
      );
    
  });

  return <ul className="list-content">{elements} </ul>;
}
Tab2.defaultProps = {
  rated: [],
};
