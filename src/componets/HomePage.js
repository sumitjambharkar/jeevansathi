import React from 'react';
import Abouts from './firstPage/Abouts';
import Footer from './firstPage/Footer';
import Header from './firstPage/Header'
import Main from './firstPage/Main';
import Story from './firstPage/Story';
import Subscription from './firstPage/Subscription';

const HomePage = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Story/>
    <Subscription/>
    <Abouts/>
    <Footer/>
    </>
  )
}

export default HomePage