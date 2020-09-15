import React from "react";
import Card from "../card";
import Loader from "../loader";

function CardList({ data, loading }) {
  const loader = loading ? <Loader /> : null;
  const cardEl = !loading ? <Card data={data} loading={loading} /> : null;
  
  return (
    <ul className="list-content">
      {loader}
      {cardEl}
      {/* <Card data={data} loading={loading}/> */}
    </ul>
  );
}
export default CardList;
