import React from 'react';
import Footer from './firstPage/Footer';
import Header from './firstPage/Header'
import Main from './firstPage/Main';
import Story from './firstPage/Story';
import Subscription from './firstPage/Subscription';
import About from './firstPage/Abouts'
import Slider from './firstPage/Slider';
import Register from '../componets/firstPage/Register'
const HomePage = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <Register/>
    <Main/>
    <Story/>
    <Subscription/>
    <About/>
    <Footer/>
    </>
  )
}

export default HomePage