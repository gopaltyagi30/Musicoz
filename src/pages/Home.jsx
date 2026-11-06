import React, { useContext } from 'react'
import { store } from '../context/AuthContext'
import HeroSection from '../components/listeners/HeroSection';
import TrendingSongs from '../components/listeners/TrendingSongs';

const Home = () => {
   
  return (
    <div>
      <HeroSection/>
      <TrendingSongs/>
    </div>
  )
}

export default Home
