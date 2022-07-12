import React from 'react';
import { Card, Title } from '../Card/Card';
import './cardList.scss';

function Row({ title, catagory }) {
  return (
    <div className='card-list'>
      <Title title={title} />
      <div className='card-list__flex'>
        {catagory.map((item) => {
          return (
            <Card
              key={new Date().now().slice(0, 10)}
              imgUrl={item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
