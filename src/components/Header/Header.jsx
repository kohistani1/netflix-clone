import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import TvShows from '../../pages/Tv shows/TvShows';
import Movies from '../../pages/Movies/Movies';
import Recent from '../../pages/Recent/Recent';
import MyList from '../../pages/My List/MyList';

import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.png';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__left--logo'>
          <img src={logo} alt='' />
        </div>
        <div className='header__left--nav'>
          <Link to='tv-shows'>Tv Shows</Link>
          <Link to='movies'>Movies</Link>
          <Link to='recent'>Recently Added</Link>
          <Link to='my-list'>My List</Link>
        </div>
      </div>
      <div className='header__search'>
        <SearchIcon sx={{ fontSize: '4rem' }} />
      </div>
    </div>
  );
}

export default Header;
