import React from 'react';
import { Card, Title } from '../Card/Card';
import './cardList.scss';

function Row({ title, imgUrls }) {
  return (
    <div className='card-list'>
      <Title title={title} />
      <div className='card-list__flex'>
        {imgUrls.map((url) => {
          return <Card key={Math.random()} imgUrl={url} />;
        })}
      </div>
    </div>
  );
}

export default Row;
