import React from 'react';
import styled from 'styled-components';
import img1 from '../image/engagement/bride.jpg';
import img2 from '../image/engagement/Engagement-couples.jpg';
import img3 from '../image/engagement/gotengaged.jpg';
import img4 from '../image/engagement/haldishoot.jpg';
import img5 from '../image/engagement/swagcouples.jpg';
import img6 from '../image/engagement/weddingbeuro.jpg';
import img7 from '../image/engagement/partners.jpg';
import img8 from '../image/engagement/couples.jpg';
import header from '../image/heading-bg.png';

const array = [img1,img2,img3,img4,img5,img6,img7,img8]

const OurGall = () => {
  return (
    <Section>
    <section class="gallery section-padding" id="gallery">
        <div class="container">
            
                <div className='text-section'>
                    <h2>Our Recent MarriageOrbit Photography</h2>
                    <p>Here are some examples of our marriageorbit photography.These well-known sayings from eminent photographers cover a wide range of subjects,
                        from what photography means to them to what makes for a successful shot. Reading these words of wisdom from these illustrious
                        photography experts might be quite beneficial.</p>

                        </div>

        <div class="row content">
            <ul id="filter">
                <li><a href="#" class="active" data-group="all">All</a></li>
                <li><a href="#" data-group="engagement">Engagement</a></li>
                <li><a href="#" data-group="wedding">Wedding</a></li>
              
            </ul>

            <div class="row" id="shuffle-wrapper">
                {array.map((doc)=>(
                  <div class="lay col-lg-3 col-xs-6 col-sm-6 col-md-6 item" data-groups='["all",  "engagement", "wedding"]'>
                    <a href="images/home/engagement/couples.jpg" data-lightbox-gallery="gallery1">
                        <div class="overlay"></div>
                        <img src={doc} alt="Gallery image" class="img img-responsive"/>
                    </a>
                </div>
                ))}
            </div>
            </div> 
        </div>
    </section> 
    </Section>
  )
}

export default OurGall;

const Section = styled.div`
padding: 50px 0 50px;
.text-section h2 {
  text-align: center;
  background: url(${header}) no-repeat center 44px;
    font-size:36px;
    color: #2a1d22;
    line-height:38px;
    margin-top:6px;
    padding-bottom: 86px;
    font-family: 'Dancing Script', cursive;
    
}
.text-section p {
	font-family: 'Roboto Slab';
}

.gallery {
	background-color: #fef0ee;
	padding-bottom: 0;
	overflow: hidden;
}

.gallery ul {
	text-align: center;
	margin-bottom: 60px;
}

.gallery ul li {
	display: inline-block;
}

.gallery ul li a {
	display: block;
	color: #1e1e1e;
	padding: 12px;
	border: 1px solid #ee8397;
}

.gallery ul li .active {
	background-color: #df2349;
	color: #fff;
}

.gallery #shuffle-wrapper .col {
	padding: 0;
	position: relative;
	display: block;
	visibility: visible;
	box-sizing: border-box;
}

.gallery #shuffle-wrapper a {
	display: block;
	position: relative;
	overflow: hidden;
}

.gallery #shuffle-wrapper .overlay {
	background: rgba(223,35,73,0.7) url(../images/home/gallery/search-icon.png) no-repeat center center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	-webkit-transform: scale(0,0);
	transform: scale(0,0);
}

.gallery #shuffle-wrapper .lay:hover .overlay {
	visibility: visible;
	-webkit-transform: scale(1,1);
	transform: scale(1,1);
	z-index: 5;
}

.gallery #shuffle-wrapper .lay img {
	width: 100%;
	display: block;
	margin-top: 24px;
	-webkit-transform: scale(1.1,1.1);
	transform: scale(1.1,1.1);
	-webkit-transition: all 0.5s;
	transition: all 0.5s;
}

.gallery #shuffle-wrapper .lay:hover img {
	-webkit-transform: scale(1.3,1.3);
	transform: scale(1.3,1.3);
}




/*--------------------------------------------------------------
#1.7	groomsmen-bridesmaids
--------------------------------------------------------------*/
.groomsmen-bridesmaids {
	overflow: hidden;
	padding-bottom: 0;
}

.groomsmen-bridesmaids .content {
	background: #df2349 url(../images/home/groomsmen-bridesmaids/bg.jpg);
	margin-top: 150px;
	padding-bottom: 100px;
	position: relative;
}

.groomsmen-bridesmaids .content:after {
	content: "";
    width: 100%;
    height: 32px;
    display: block;
    background: url(../images/home/bottom-shape.png) repeat-x;
    position: absolute;
    left: 0;
    bottom: -1px;
}

.groomsmen-bridesmaids .content .col {
	text-align: center;
}

.groomsmen-bridesmaids .frame {
	position: relative;
	margin-top: -132px;
	overflow: hidden;
}

.groomsmen-bridesmaids .frame img {
	border-radius: 50%;
}

.groomsmen-bridesmaids .frame img:first-child {
	width: 100%;
	position: relative;
	z-index: 50;
}

.groomsmen-bridesmaids .frame img:last-child {
	width: 98%;
	position: absolute;
	top: 3px;
	left: 3px;
}

.groomsmen-bridesmaids .content h3 {
	font-family: 'Roboto Slab', serif;
	font-size: 22px;
	color: #1e1e1e;
	text-transform: uppercase;
}

.groomsmen-bridesmaids .content span {
	font-size: 14px;
	color: #fff;
	text-transform: uppercase;
}

.groomsmen-bridesmaids .overlay,
.journal .overlay {
 	background-color: rgba(223,35,73,0.5);
 	width: 98%;
    height: 98%;
    text-align: center;
    z-index: 10;
    border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%) scale(0,0);
	transform: translate(-50%, -50%) scale(0,0);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
 }

.groomsmen-bridesmaids .overlay div,
.journal .overlay div {
	background-color: #fff;
	display: block;
	width: 60%;
	height: 60%;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);

}

.groomsmen-bridesmaids .overlay div span,
.journal .overlay div span {
	width: 100%;
	font-size: 15px;
	color: #df2349;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}

.groomsmen-bridesmaids .frame:hover .overlay,
.journal .frame:hover .overlay {
	background-image: url(../images/home/groomsmen-bridesmaids/hover-img.png);
	background-repeat: no-repeat;
	background-position: center center; 
	background-size: 90%;
	-webkit-transform: translate(-50%, -50%) scale(1,1);
	transform: translate(-50%, -50%) scale(1,1);
}


`