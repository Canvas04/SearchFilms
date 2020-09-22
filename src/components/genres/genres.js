import React from 'react';

function Genre({ id,genres }) {
    const genresArr =  genres.map(el => {
       if(id.includes(el.id)) {
         return el.name;
       }
     })
     const genresStr = genresArr.filter(el => el !== undefined).join(',')
     return <>
   <span>{genresStr}</span>
     </>
   }

   export default Genre;