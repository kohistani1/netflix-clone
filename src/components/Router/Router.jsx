import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../../pages/Movies/Movies';
import MyList from '../../pages/My List/MyList';
import Recent from '../../pages/Recent/Recent';
import TvShows from '../../pages/Tv shows/TvShows';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tv-shows' element={<TvShows />} />
        <Route path='movies' element={<Movies />} />
        <Route path='recent' element={<Recent />} />
        <Route path='my-list' element={<MyList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
