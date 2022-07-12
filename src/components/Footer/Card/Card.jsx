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
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const handleClick = (e) => {
    console.log(e.target.src);
  };
  return (
    <div className='card'>
      <img onClick={handleClick} src={`${baseUrl}${imgUrl}`} alt='poster' />
    </div>
  );
}
