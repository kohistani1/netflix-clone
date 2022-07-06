import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Router from './components/Router/Router';

const api_key = '8e20f3f85dad7e081050a5aa1eefc885';

function App() {
  const url = `http://localhost:3000/api`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        // console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(data, 'state'); // state
  return (
    <BrowserRouter>
      <div className='container'>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
