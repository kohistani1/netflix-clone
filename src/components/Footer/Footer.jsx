import React from 'react';
import Row from './Card List/CardList';
import url from '../../images/poster--1.jpg';
import url2 from '../../images/poster--3.jpg';
import url3 from '../../images/poster--4.jpg';
import url4 from '../../images/poster--2.png';
import './footer.scss';

function Footer() {
  const arr = [url, url2, url3, url2, url4, url3, url, url];
  return (
    <div>
      <Row title={'popualar hits'} imgUrls={arr} />
      <Row title={'Movies'} imgUrls={arr} />
    </div>
  );
}

export default Footer;
