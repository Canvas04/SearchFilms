import React from 'react';
import Card from '../card';
function CardList({data,loading}) {
return (
    <ul className="list-content">
          <Card data={data} loading={loading}/>
        </ul>
)
}
export default CardList;