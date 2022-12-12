import React from 'react';
import styled from 'styled-components';
import header from '../image/heading-bg.png';
import frame from '../image/frame.png';
import frame_sm from "../image/frame-sm.png";
import bg from "../image/bg.jpg"
import shape from "../image/bottom-shape.png";
import lifepartner from "../image/lifepartner.webp";
import couple from "../image/couple.jpg";
import bride from "../image/bride.jpg";

const Story = () => {
    return (
        <>
            <Section>
                <section class="journal section-padding">
                    <div class="container">
                        <div class="row section-heading">
                            
                                <h4>Matrimony Service with Millions of Success Stories</h4>

        
                        </div>
                    </div>

                    <div class="row content">
                        <div class="container">
                            <div className='row'>
                            <div class="col-lg col-md-4 col-sm-12 col-xs-12  text ">
                                <div class="frame">
                                    <a href="#">
                                        <img src={frame} alt="Frame" class="frame-main" />
                                        <img src={frame_sm} alt="Frame" class="frame-sm" />
                                        <img src={bride} alt="Journal" class="main-img" />

                                    </a>

                                </div>
                                <h1>Prateek & Heena</h1>
                                <p>In December 2021, we connected through Marriageorbit.com. Because I met  </p>
                                <button>Read More</button>
                            </div>
                            <div class="col-lg col-md-4 col-sm-12 col-xs-12 text">
                                <div class="frame">
                                    <a href="#">
                                        <img src={frame} alt="Frame" class="frame-main" />
                                        <img src={frame_sm} alt="Frame" class="frame-sm" />
                                        <img src={couple} alt="Journal" class="main-img" />

                                    </a>
                                </div>
                                <h1>Yash & Anukriti</h1>
                                <p>We are eternally grateful to Marriageorbit.com, so let's get on to the  </p>
                                <button>Read More</button>
                            </div>
                            <div class="col-lg col-md-4 col-sm-12 col-xs-12 text">
                                <div class="frame">
                                    <a href="#">
                                        <img src={frame} alt="Frame" class="frame-main" />
                                        <img src={frame_sm} alt="Frame" class="frame-sm" />
                                        <img src={lifepartner} alt="Journal" class="main-img" />

                                    </a>
                                </div>
                                <h1>Abhinav & Shristi</h1>
                                <p>First of all, we would want to express our gratitude to Marriageorbit.com</p>
                                <button>Read More</button>
                            </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Section>
        </>
    )
}

export default Story;

const Section = styled.div`
padding-top: 51px;
.section-heading h4 {
    background: url(${header}) no-repeat center 44px;
    font-size:36px;
    color: #2a1d22;
    line-height: 38px;
    margin: 0;
    padding-bottom: 86px;
    font-family: 'Dancing Script', cursive;
    text-align: center;
}
.journal {
	overflow: hidden;
	padding-bottom: 0;
}

.journal .content {
	background: #df2349 url(${bg});
	margin-top: 150px;
	padding-bottom: 130px;
	position: relative;
}



.journal .content:after {
	content: "";
	width: 100%;
	height: 32px;
	display: block;
	background: url(${shape}) repeat-x;
	position: absolute;
	left: 0;
	bottom: -1px;
}

.journal .content .container {
	margin-top: -114px;
}

.journal .frame {
	width: 300px;
	height: 300px;
	overflow: hidden;
	position: relative;
	top: -37px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}

.journal .frame img {
	/* border-radius: 50%; */
}

.journal .frame .frame-main {
	position: relative;
	z-index: 5;
    width: 100%;
}

.journal .frame .frame-sm {
	width: 100%;
	position: relative;
	z-index: 5;
	display: none;
}

.journal .frame .main-img {
	width: 97%;
	position: absolute;
	right: 2px;
	top: 2px;
}
.text {
    text-align: center;
    margin-top: 40px;
}
.text h1 {
    color: #fff;
    font-family: 'Lobster', cursive;
}
.text p {
    font-size: 18px;
    color: #fff;
    font-family: 'Roboto Slab', serif;
}
.text button {
    padding: 6px 15px;
    border-radius: 7px;
    border: none;
    transition: 0.5s;
    font-size: inherit;
    line-height: inherit;
    font-family: 'Roboto Slab', serif;
}
.text button:hover {
    color: #fff;
    background-color:#df2349;
    border: 1px solid #fff;
}
@media (max-width:767px){
    .journal .frame .frame-sm {
    display:block;
}
}
@media (max-width: 767px){
  .journal .frame .frame-main {
    display: none;
}
}
@media (max-width: 991px){
.journal .frame {
    width: 230px;
    height: 230px;
    top: -25px;
}
}
@media(max-width: 767px){
.journal .content {
    margin-top: 0;
}
.journal .content .container {
    margin-top: 100px;
}
.section-heading h2 {
    background-position: center 40px;
    font-size: 30px;
}
.journal .content .col {
    margin: 17px auto 50px;
}
}

`
