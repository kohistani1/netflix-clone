import React from 'react';
import './card.scss';

export const Title = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
};

export function Card({ imgUrl }) {
  //   console.log(props);
  return (
    <div className='card'>
      <img src={imgUrl} alt='poster' />
    </div>
  );
}
