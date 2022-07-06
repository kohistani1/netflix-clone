import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__content--left'>
        <h1>Stanger Things</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          facere natus perferendis impedit id inventore aliquid sapiente
          veritatis sequi doloremque.
        </p>
        <Button
          variant='outlined'
          startIcon={<PlayArrowIcon />}
          sx={{
            backgroundColor: '#fff',
            color: 'gray',
            fontSize: '1.5rem',
          }}
        >
          Play
        </Button>
        <Button
          variant='contained'
          endIcon={<AddIcon />}
          sx={{
            backgroundColor: 'gray',
            color: 'white',
            fontSize: '1.5rem',
          }}
        >
          My List
        </Button>
      </div>
    </div>
  );
}

export default Hero;
