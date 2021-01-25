import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'> 
      <h1>Adventures Mood</h1>
      <p>Enjoy the Joy!</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          START TODAY
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}> WATCH EPISODES <i className='far fa-play-circle' /> </Button>
      </div>
    </div>
  );
}

export default HeroSection;