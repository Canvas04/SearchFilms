import React from "react";
import Card from "../card";
import Loader from "../loader";
import { Alert } from "antd";
import "./cardList.css";
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

function Error({ loading, isError, onClose, data ,genres}) {
  if (loading && isError) {
    return (
      <>
        {" "}
        <Alert
          message="Error"
          description="Not Internet Connection"
          type="error"
        />
      </>
    );
  } else if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else if (isError) {
    return (
      <>
        <Alert
          message="Error"
          description="Such film is not found"
          type="error"
          showIcon
          closable
          onClose={onClose}
        />
      </>
    );
  }
  return (
    <>
      {" "}
      <Card data={data} genres={genres} />
    </>
  );
}
