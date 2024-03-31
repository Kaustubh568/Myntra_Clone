import React from 'react';
import  Header  from './Header';
import GenderBanner  from './GenderBanner';
import Categories from './Categories';

export const Home = () => {
  return ( 
    <div>
    <Header></Header>
    <GenderBanner></GenderBanner>
    <Categories></Categories>
    </div>
  );
};

export default Home ;