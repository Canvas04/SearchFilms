import React from "react";
import './rate.css';
import PropTypes from 'prop-types';

function Rate({ rate }) {
    let classNames = 'content-desc-header-rate';
    if(rate >=0 && rate <= 3) {
        classNames += ' low-grade'
    }else if (rate >3 && rate <= 5 ) {
classNames += ' middle-grade'
    }else if( rate > 5 && rate <=7 ) {
        classNames += ' high-grade'
    }else if ( rate > 7) {
        classNames += ' superior-grade'
    }
  return <>
 <span className={classNames}>
              <span>{rate}</span>
            </span>
  </>;
}
Rate.propTypes = {
    rate: PropTypes.number
}
export default Rate;
