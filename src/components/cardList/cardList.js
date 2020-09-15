import React from "react";
import Card from "../card";
import Loader from "../loader";
import { Alert } from "antd";
import "./cardList.css";
function CardList({ data, loading, isError,onClose }) {
  const errorMessage = isError ? (
    <Alert
      message="Error"
      description="Such film is not found"
      type="error"
      showIcon
      closable
     onClose={onClose}
    />
  ) : null;
  const hasData = !(loading || isError);
  const loader = loading ? <Loader /> : null;
  const cardEl = hasData ? <Card data={data} /> : null;
  let classNames = "list-content";
  if (loading) {
    classNames += " loader";
  }
  return (
    <ul className={classNames}>
      {errorMessage}
      {loader}
      {cardEl}
    </ul>
  );
}
export default CardList;
