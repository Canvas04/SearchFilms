import React from "react";
import Card from "../card";
import Loader from "../loader";
import { Alert } from "antd";
import "./cardList.css";
import Error from '../error';
function CardList({ data, loading, isError, onClose, genresArr }) {
  let classNames = "list-content";
  if (loading) {
    classNames += " loader";
  }
  return (
    <ul className={classNames}>
      <Error
        loading={loading}
        isError={isError}
        onClose={onClose}
        data={data}
        genres={genresArr}
      />
    </ul>
  );
}
export default CardList;

