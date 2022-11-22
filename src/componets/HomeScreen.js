import React from 'react'
import Head from './Head';
import Navbar from './Nav/Navbar';
import Matches from './Navpage/Matches';


const HomeScreen = () => {
    
  return (
    <div>
        <Head/>
        <Navbar/>
        <Matches/>
    </div>
  )
}

export default HomeScreen