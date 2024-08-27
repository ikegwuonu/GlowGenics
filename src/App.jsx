import React from 'react';
import './scss/main.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Standard from './components/Standard';
import Latest from './components/Latest';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Assistance from './components/Assistance';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Trending/>
      <Standard/>
      <Latest/>
      <Testimonials/>
      <Subscribe/>
      <Assistance/>
    </div>
  )
}

export default App