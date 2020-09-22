import React from "react";
import "./cardList.css";
import Error from '../error';
function CardList({ data, loading, isError, onClose }) {
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
      />
    </ul>
  );
}
export default CardList;

