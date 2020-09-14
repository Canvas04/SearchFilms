import React from 'react';
import Card from '../card';
function CardList({data}) {
return (
    <ul className="list-content">
          <Card data={data}/>
        </ul>
)
}
export default CardList;