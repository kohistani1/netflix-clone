import React from 'react';
import './card.scss';
import img from '../../../images/poster.jpg';

const Title = ({ t }) => {
  console.log(t);
  return (
    <>
      <h3 className=''>{t}</h3>
    </>
  );
};

function Card(props) {
  const { title, imgUrl } = props.data;
  console.log(props);
  return (
    <div className='card'>
      {title && <Title title={title} />}
      <img src={imgUrl} alt='poster' />
    </div>
  );
}

export default Card;
