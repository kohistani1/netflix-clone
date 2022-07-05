import React from 'react';
import './card.scss';

const Title = ({ t }) => {
  console.log(t);
  const ti = [];
  const titles = [...new Set(ti)];
  console.log(titles);

  return (
    <>
      <h3>{t}</h3>
    </>
  );
};

function Card({ title, imgUrl }) {
  //   console.log(props);
  return (
    <div className='card'>
      {title && <Title t={title} />}
      <img src={imgUrl} alt='poster' />
    </div>
  );
}

export default Card;
