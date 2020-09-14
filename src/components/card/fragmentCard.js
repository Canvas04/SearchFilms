import React , {Fragment} from 'react';
import {Rate} from 'antd';
 const CardFragment = ({item}) => {
    return (
        <>
         <div className="content-img">
          {" "}
          <img
            alt={item.title}
            src={`http://image.tmdb.org/t/p/w440_and_h660_face/${item.poster}`}
            width={150}
            className="content-img-el"
          />
        </div>

        <div className="content-desc">
          <header className="content-desc-header">
            <h1> {item.title}</h1>
            <span className="content-desc-header-rate">
              <span>{item.rate}</span>
            </span>
          </header>
          <div className="content-desc-date">{item.date}</div>
          <div className="content-desc-genre"></div>
          <div className="content-desc-overview">{item.desk}</div>

          <div className="content-desc-stars">
            <Rate allowHalf={true} count={9} defaultValue={item.rate} />
          </div>
        </div>
        </>
    )
}
export default CardFragment;