import React from "react";
import Card from "../card";
import Loader from "../loader";
import "./cardList.css";
function CardList({ data, loading }) {
  const loader = loading ? <Loader /> : null;
  const cardEl = !loading ? <Card data={data} loading={loading} /> : null;
  let classNames = "list-content";
  if (loading) {
    classNames += " loader";
  }
  return (
    <ul className={classNames}>
      {loader}
      {cardEl}
      {/* <Card data={data} loading={loading}/> */}
    </ul>
  );
}
export default CardList;
