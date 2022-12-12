import React from 'react'
import styled from "styled-components";
import call from '../image/call.png';
import people from '../image/call3.png';
import note from '../image/call7.png';
import header from '../image/heading-bg.png';
import bg from '../image/header-sm-bg.png'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()
    const registerNew = () => {
        navigate({
          pathname:"/profile/registration_new"
        })
        
      }
  
  return (
    <>
    <Section>
      <div class="container">
        <div className='section-heading'>
        <h4>Find your Special One</h4>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="info">
                    <img src={note}/>
              
              <p>Register for free & put up<br/> your Profile</p>
              <button onClick={registerNew}>Sign up</button>
            </div>
            </div>

            <div class="col-md-4">
                <div class="info">
                    <img src={people}/>
              
              <p>Select & Connect with Matches<br/> you like</p>
              <button onClick={registerNew}>Connect</button>
            </div>
            </div>

            <div class="col-md-4">
                <div class="info">
                    <img src={call}/>
              
              <p>Become a Premium <br/>Member & Start</p>
              <button onClick={registerNew}>Interact</button>
            </div>
            </div>

        </div>
    </div>
    </Section>
    </>
  )

}

export default Main;

const Section = styled.div`
padding-top: 24px;
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
.info {
    text-align: center;
    margin-top: 30px;
}
.info img {
    background-color: #df2349;
    background-repeat: 100% 100%;
  background-image: url(${bg});
    border-radius: 51%;
    width: 30%;
    padding: 13px;
}
.info p {
    font-size: 17px;
    line-height: 30px;
    padding: 20px 0;
    font-family: 'Roboto Slab';
}
.info button {
    color: #fff;
    background-color: #df2349;
    padding: 10px;
    border-radius: 10px;
    border: none;
    transition: 0.5s;
    font-family: 'Roboto Slab';
}
.info button:hover {
    color: #df2349;
    background-color: #fff;
    border: 1px solid #df2349;
}
`

