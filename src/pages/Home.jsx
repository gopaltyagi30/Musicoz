import React, { useContext } from 'react'
import { store } from '../context/AuthContext'
import HeroSection from '../components/listeners/HeroSection';
import TrendingSongs from '../components/listeners/TrendingSongs';
import Footer from '../components/listeners/Footer';
import { useSearchSongs } from '../components/listeners/hook/listenerHooks';
import SearchedSongs from '../components/listeners/SearchedSongs';

const Home = () => {
   const {search,data,setSearch,isPending} = useSearchSongs();
  return (
    <div>
      <HeroSection search={search} setSearch={setSearch}/>
     {search?<SearchedSongs data={data} isPending = {isPending} search={search}/>:<TrendingSongs/>}
      <Footer/>
    </div>
  )
}

export default Home
