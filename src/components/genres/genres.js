import React from 'react';
import { GenreConsumer } from '../genres-context/genres-context';
import './genre.css';

function Genre({ id }) {
return (
  <GenreConsumer >
    {
      (genres) => {
             const genresArr =  genres.map(el => {
       if(id.includes(el.id)) {
         return el.name;
       }
     });
     const genresStr = genresArr.filter(el => el !== undefined).map((el,i) => {
     return <li key={i} >{el}</li>
      });
      
    return <>
   <ul className='genre'>{genresStr}</ul>
     </>
    
      }
    }
  </GenreConsumer>
) 
   }

   export default Genre;