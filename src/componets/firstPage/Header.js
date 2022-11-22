import React, {useState } from "react";
import styled from "styled-components";
import Shaadi from '../image/photo.jpg'
import Logoo from '../image/nl.png'
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  
  return (
    <>
     
      <Head>
        <Navbar>
          <Logo><h1>MARRIAGE</h1>
            <img className="App-logo" src={Logoo} alt=""/>
            <h1>RBIT</h1>
          </Logo>
            <Loginn>       
                <Login/>
            </Loginn>
        </Navbar>
        <Heading>
          <h2>Trusted Matrimony & Matchmaking Service</h2>
          <p>Let's Start New Journey</p>
        </Heading>
       <Register/>
      </Head>
    </>
  );
};
export default Header;
const Head = styled.div`
  background-image: url(${Shaadi});
  z-index: 1;
  position: relative;
  min-height:600px;
  background-size:cover;
  background-repeat: no-repeat;
  align-items: center;
  .login {
    display: none;
  }
  .signup {
    display: none;
  }
  @media (max-width:500px) {
  min-height:100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  
  }
  @media (max-width:800px) {
  min-height:100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  
  }
`;


const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding-top:20px;
  background-color:#00000061;
  position:static;
  @media (max-width:500px) {
    
  }
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

> h1 {
  font-size: 30px;
    font-weight: 600;
    color: #FFA500;
    font-family: poppins;
}

.App-logo {

  width: 4rem;
  margin-top: -10px;
}
@media (max-width:500px) {
  h1 {
    font-size:18px;
  }
  .App-logo{
    width:2rem;
  }
}
@media (max-width:800px) {
   >h1 {
    font-size: 20px;
    font-weight: 600;
    color: #FFA500;
    font-family: poppins;
  }
  .App-logo {
    width: 2rem;
    margin-top: -10px;
}
  }

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 1s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  
`;
const Loginn = styled.div`
  color: black;
  > h1 > a {
    font-size: 20px;
    text-decoration: none;
    color:#ffa500;
    border:1px solid #fff;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  p{
    font-size: 30px;
   
  }
`;
const Heading = styled.div`
  text-align: center;
  margin-top:310px;
  position: relative;
  color:#FFA500;
  >  p{
    font-size:40px;
    font-family: TypoUpright BT;
  }
  @media (max-width:995px) {
    h1 {
      font-size:24px;
    }
  }
  @media (max-width:500px) {
    margin-top:150px;
    
  }
`;
