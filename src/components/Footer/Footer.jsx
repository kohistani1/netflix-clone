import React from 'react';
import Row from './Card List/CardList';
import url from '../../images/poster.jpg';
import './footer.scss';

function Footer() {
  const arr = [url, url, url, url, url, url, url, url];
  return (
    <div>
      <Row title={'popualar hits'} imgUrls={arr} />
      <Row title={'Movies'} imgUrls={arr} />
    </div>
  );
}

export default Footer;
