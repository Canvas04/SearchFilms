import React from "react";
import "./card.css";
import { Rate as Stars } from "antd";
import Genre from "../genres";
import Rate from "../rate";
import MovieSearch from '../movie-search';
function Card({ data,rateFilms }) {

   const onHandlerStars = () => {
       data.map(item => {
         new MovieSearch().postRate(item.id)
       })
      };
     
      const elements = data.map((item) => {
        
    return (
     
      <li key={item.id} className="content">
        
        <div className="content-img">
          {" "}
          <img
            alt={item.title}
            src={`http://image.tmdb.org/t/p/w440_and_h660_face/${item.poster}`}
            width={150}
            className="content-img-el"
          />
        </div>

        <div className="content-desc">
          <header className="content-desc-header">
            <h1> {item.title}</h1>
            <Rate rate={item.rate} />
          </header>
          <div className="content-desc-date">{item.date}</div>
          <div className="content-desc-genre">
            <Genre id={item.genre} />
          </div>
          <div className="content-desc-overview">{item.desk}</div>

          <div className="content-desc-stars">
            <Stars allowHalf={true} count={9} onChange={onHandlerStars}  />
          </div>
        </div>
      </li>
    );
  });
   return <> {elements} </>;
  
  
  
}
export default Card;
