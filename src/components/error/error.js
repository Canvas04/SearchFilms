import React from "react";
import { Alert } from "antd";
import Loader from "../loader";
import Card from "../card";
import PropTypes from "prop-types";

function Error({
  loading,
  isError,
  onClose,
  data,
  genres,
  rateFilms,
  session,
}) {
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
      <Card
        data={data}
        genres={genres}
        rateFilms={rateFilms}
        session={session}
      />
    </>
  );
}
Error.propTypes = {
  loading: PropTypes.bool,
  isError: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  genres: PropTypes.arrayOf(PropTypes.object),
  rateFilms: PropTypes.func,
  session: PropTypes.string
};
export default Error;
