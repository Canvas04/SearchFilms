import React from 'react';
import content from './question.webp';
export default function Img({path,overview}) {
    let pathImg;
    if(path !== null ) {
          pathImg = `http://image.tmdb.org/t/p/w440_and_h660_face/${path}`
        }else {
            pathImg = content;
        }
   
return (
    <>
    <img  src={pathImg} alt={overview} className='content-img-el' width ={150}/>
    </>
)
}