import React from "react";
import { GenreConsumer } from "../genres-context/genres-context";
import "./genre.css";
import PropTypes from "prop-types";

function Genre({ id }) {
  return (
    <GenreConsumer>
      {(genres) => {
        const genresArr = genres.map((el) => {
          if (id.includes(el.id)) {
            return el.name;
          }
        });
        const genresStr = genresArr
          .filter((el) => el !== undefined)
          .map((el, i) => {
            return <li key={i}>{el}</li>;
          });

        return (
          <>
            <ul className="genre">{genresStr}</ul>
          </>
        );
      }}
    </GenreConsumer>
  );
}
Genre.propTypes = {
  id: PropTypes.arrayOf(PropTypes.number)
};

export default Genre;
