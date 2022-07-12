import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from './Card List/CardList';
import './footer.scss';

const key = '8e20f3f85dad7e081050a5aa1eefc885';
const url = 'https://api.themoviedb.org/3/movie';

function Footer() {
  const [upcomings, setUpcomings] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    const getData = async (cat, setFun) => {
      try {
        const {
          data: { results }, //first geting data, this data has a key results getting it by destructuring
        } = await axios.get(`${url}/${cat}?api_key=${key}`);

        setFun(results);
      } catch (error) {
        // console.log(error);
      }
    };
    getData('popular', setPopulars); //gettings data with catagory (catagory, setCatagory)
    getData('upcoming', setUpcomings);
    getData('top_rated', setTopRated);
  }, []);

  // console.log(upcomings);
  return (
    <div>
      <Row title={'Upcomings'} catagory={upcomings} />
      <Row title={'popular'} catagory={populars} />
      <Row title={'Top Rated'} catagory={topRated} />
    </div>
  );
}

export default Footer;
