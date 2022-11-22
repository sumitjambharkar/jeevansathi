import React from 'react';
import styled from 'styled-components';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DoneIcon from '@mui/icons-material/Done';


const Subscription = () => {
  return ( 
    <>
    <Sub>
    <div className='card1'>
      <>
      <div className='container'>
        <div className='row'>
         <div className='col-md-12 text-center mt-5 ca'>
         <h2>Select Membership Package</h2>
         </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Gold</span> 3 Months</strong>
              <span>FREE<CurrencyRupeeIcon/><span style={{textDecoration:"line-through"}}>499</span></span>
              <ul>
                <li> <DoneIcon/> 150 Contact</li>
                <li> <DoneIcon/>Perfect E-Matches</li>
                <li> <DoneIcon/>Unlimited Personalized messages</li>
                <li> <DoneIcon/> Bold Listing</li>
                <li> <DoneIcon/> Astro Matching</li>
              </ul>
              <a><span style={{position:"absolute",opacity:"0",fontSize:"0px"}}>login</span>Buy Now</a>
            </div>
          </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Diamond</span> 6 Months</strong>
              <span>FREE<CurrencyRupeeIcon/><span style={{textDecoration:"line-through"}}>999</span></span>
              <ul>
                <li> <DoneIcon/> 250 Contact</li>
                <li> <DoneIcon/>Perfect E-Matches</li>
                <li> <DoneIcon/>Unlimited Personalized messages</li>
                <li> <DoneIcon/> Bold Listing</li>
                <li> <DoneIcon/> 100 Astro Matching</li>
              </ul>
              <a><span style={{position:"absolute",opacity:"0",fontSize:"0px"}}>login</span>Buy Now</a>
            </div>
          </div>

          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Platinum </span> 9 Months</strong>
              <span>FREE<CurrencyRupeeIcon/><span style={{textDecoration:"line-through"}}>1499</span></span>
              <ul>
                <li> <DoneIcon/> 150 Contact</li>
                <li> <DoneIcon/>Perfect E-Matches</li>
                <li> <DoneIcon/>Unlimited Personalized messages</li>
                <li> <DoneIcon/> Bold Listing</li>
                <li> <DoneIcon/> 200 Astro Matching</li>
              </ul>
              <a><span style={{position:"absolute",opacity:"0",fontSize:"0px"}}>login</span>Buy Now</a>
            </div>
          </div>
          <div className='col-md-3 mt-5'>
            <div className='card'>
              <p>MOST POPULAR</p>
              <strong><span>Star </span> 12 Months</strong>
              <span>FREE<CurrencyRupeeIcon/><span style={{textDecoration:"line-through"}}>1999</span></span>
              <ul>
                <li><DoneIcon/> 600 Contact</li>
                <li><DoneIcon/>Perfect E-Matches</li>
                <li><DoneIcon/>Unlimited Personalized messages</li>
                <li><DoneIcon/> Bold Listing</li>
                <li><DoneIcon/> 250 Astro Matching</li>
              </ul>
              <a><span style={{position:"absolute",opacity:"0",fontSize:"0px"}}>login</span>Buy Now</a>
            </div>
          </div>

        </div>
      </div>
      </>
    </div>

    </Sub>
    </>
  )
}

export default Subscription;

const Sub = styled.div`
.card1{
  width: "100%";
  min-height: 600px;
}

.card{
  width: "100%";
  height: 425px;
  background: #fff;
  border-radius: 0 30px 0 30px;
  padding: 15px;
}
.card li > .MuiSvgIcon-root {
  color: green;
}

.card p {
   font-size: 12px;
   text-align: center;
   margin-top: -28px;
   color: #fff;
   background-color: gray;
   width: 140px;
   padding: 2px 0;
  justify-content: center;
  border-radius: 10px;
}

.card strong{
  text-align: center;
  font-size: 18px;
}

.card strong span{
  font-size: 28px;
  color: #ffa500;
}

.card span{
 
  text-align: center;
    font-size: 22px;
    color: red;
    font-weight: 600;
}

.card ul li{
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  list-style: none;
}
.card a{
  text-align: center;
  padding: 5px 0;
  margin: 20px 45px;
  background-color: #ffa500;
  border-radius: 15px;
  color: #fff;
  transition: 0.5s;
}

.card a:hover{
  background: #ccc;
}

.ca h2{
  color:#ffa500;
}
`