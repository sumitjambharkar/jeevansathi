import React, { useState } from 'react';
import bann from '../image/currentweds.jpg'
import md from "../image/title-bg.png";
import bann1 from '../image/wed1.jpg';



const Slider = () => {
  const [show ,setShow] = useState(true)
  return (
    <>
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img style={{height:"700px"}} src={bann} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      {show? <>
        <div onClick={()=>setShow(false)} className='main'>
        <img src={md}/>
      </div>
      </>:null}
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img style={{height:"700px"}} src={bann1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      {show? <>
        <div onClick={()=>setShow(false)} className='main'>
        <img src={md}/>
      </div>
      </>:null}
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"700px"}} src={bann} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      {show? <>
        <div onClick={()=>setShow(false)} className='main'>
        <img src={md}/>
      </div>
      </>:null}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider

