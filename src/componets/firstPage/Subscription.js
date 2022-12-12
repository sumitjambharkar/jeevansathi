import React from 'react'
import styled from 'styled-components';
import img from "../image/lifepartner.webp";
import header from '../image/heading-bg.png';

const Member = () => {
  return (
    <Section>
      <div class="container">
        <div class="row section-heading">
          
            <h2>Select Membership Package</h2>

            <div class="col-lg-3 col-md-3 col-sm-6 ">
              <div class="card">
                <strong><span>Gold </span> 3 Months<br />
                  <span>FREE <i class="fa fa-rupee"></i></span> <span style={{ textDecoration: "line-through" }}>400</span></strong>


                <ul>
                  <li><i class="fa fa-check"></i> 150 Contact</li>
                  <li><i class="fa fa-check"></i> Perfect E-Matches</li>
                  <li><i class="fa fa-check"></i> Unlimited Personalized messages</li>
                  <li><i class="fa fa-check"></i> Bold Listing</li>
                  <li><i class="fa fa-check"></i>  Astro Matching</li>
                </ul>
                <button>Buy Now</button>


              </div>
            </div>




            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="card">
                <strong><span>Diamond </span> 6 Months<br />
                  <span>FREE <i class="fa fa-rupee"></i></span> <span style={{ textDecoration: "line-through" }}>400</span></strong>


                <ul>
                  <li><i class="fa fa-check"></i> 250 Contact</li>
                  <li><i class="fa fa-check"></i> Perfect E-Matches</li>
                  <li><i class="fa fa-check"></i> Unlimited Personalized messages</li>
                  <li><i class="fa fa-check"></i> Bold Listing</li>
                  <li><i class="fa fa-check"></i> 100 Astro Matching</li>
                </ul>
                <button>Buy Now</button>


              </div>
            </div>


            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="card">
                <strong><span>Platinum </span> 9 Months<br />
                  <span>FREE <i class="fa fa-rupee"></i></span> <span style={{ textDecoration: "line-through" }}>1499</span></strong>


                <ul>
                  <li><i class="fa fa-check"></i> 150 Contact</li>
                  <li><i class="fa fa-check"></i> Perfect E-Matches</li>
                  <li><i class="fa fa-check"></i> Unlimited Personalized messages</li>
                  <li><i class="fa fa-check"></i> Bold Listing</li>
                  <li><i class="fa fa-check"></i> 100 Astro Matching</li>
                </ul>
                <button>Buy Now</button>


              </div>
            </div>


            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="card">
                <strong><span>Star </span> 12 Months<br />
                  <span>FREE <i class="fa fa-rupee"></i></span> <span style={{ textDecoration: "line-through" }}>1999</span></strong>


                <ul>
                  <li><i class="fa fa-check"></i> 600 Contact</li>
                  <li><i class="fa fa-check"></i> Perfect E-Matches</li>
                  <li><i class="fa fa-check"></i> Unlimited Personalized messages</li>
                  <li><i class="fa fa-check"></i> Bold Listing</li>
                  <li><i class="fa fa-check"></i> 250 Astro Matching</li>
                </ul>
                <button>Buy Now</button>


              </div>
            </div>
          
        </div>

        <div class="aboutus">
          <div className='section-heading'>
          <h2>About Us</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <img src={img} />
            </div>
            <div class="col-md-6">
              <p>We Are Marriageorbit With thousands of success stories and India's matrimonial and matchmaking services. Utilize these matrimonial services to investigate the possibilities and resources for a union with your ideal match. Numerous top-notch online matrimonial sites in India,Mumbai. A lot of grooms or brides can use a matrimony website as a platform to find the ideal match for their needs. The bride and groom might look for a spouse immediately.

                You may find high profile and free marriage bureaus in Mumbai right here. also find out about local boys and girls looking for marriage. We specialise in matching local singles for marriage between women and men. Find a bride for marriage close to you as well as in renowned places like Mumbai, Pune, New Delhi, Chennai, Bangalore, and Ahmedabad. Marriage Orbit offers you a way to locate your life partner for a planned, local, happy marriage.</p>
            </div>
          </div>
        </div>


      </div>
    </Section>
  )
}

export default Member;

const Section = styled.div`
padding-top: 24px;
.section-heading h2{
  text-align: center;
   background: url(${header}) no-repeat center 44px;
    font-size:36px;
    color: #2a1d22;
    line-height:38px;
    margin-top:8px;
    padding-bottom: 86px;
    font-family: 'Dancing Script', cursive;
}
.card{
    width: 100%;
	border: 1px solid #df2349;
	padding:12px;
	border-radius: 0px 15px 0px 15px;
	margin-top: 20px;
	

	
}

.card:hover{
	box-shadow: 0px 0px 5px 2px #df2349;
}

.card strong{
	font-size: 20px;
}

.card span{
	font-size: 25px;
	color: #df2349;

}

.card ul{
	text-align: initial;
    line-height: 36px;
    font-family: 'Roboto Slab';

}

.card button{
	color: #fff;
	padding: 5px 27px;
    margin: 27px 0px;
    background: #df2349;
	border: none;
}

.card button:hover{
	color: #df2349;
	padding: 5px 27px;
    margin: 27px 0px;
	background: #ffffff;
    border: 1px solid #df2349 ;
}

.aboutus{
	text-align: center;
  padding-top: 36px;
}

.aboutus img{
	width: 78%;
    height: 500px;
    padding: 20px 0px;
}

.aboutus p{
	font-size: 18px;
    line-height: 35px;
    margin: 0 0 60px;
    font-family: 'Roboto Slab';
    text-align: initial;
}`