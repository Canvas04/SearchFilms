import React from "react";
import "./cardList.css";
import Error from '../error';
import PropTypes from 'prop-types';

function CardList({ data, loading, isError, onClose ,rateFilms,session}) {
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
        rateFilms={rateFilms}
        session={session}
      />
    </ul>
  );
}
CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  isError: PropTypes.bool,
  onClose : PropTypes.func,
  rateFilms: PropTypes.func,
  session: PropTypes.string
}
export default CardList;

