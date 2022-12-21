import React from "react";
import styled from "styled-components";
import Logoo from '../image/logoe.png'
import Login from "./Login";
import bg from "../image/header-sm-bg.png"
const Header = () => {
  
  return (
    <>
        <Navbar>
          <Logo><h1>Marriage</h1>
            <img className="App-logo" src={Logoo} alt=""/>
            <h1>Orbit</h1>
          </Logo>
            <Loginn>       
                <Login/>
            </Loginn>
       </Navbar>
    </>
  );
};
export default Header;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-repeat: 100% 100%;
  z-index: 1;
  background-image: url(${bg});
  position:fixed;
  height: 94px;
  line-height: 20px;
  width: 100%;
  @media (max-width:500px) {
    
  }
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

> h1 {
  font-size: 35px;
    font-weight:300;
    color: #fff;
    font-family: 'Lobster', cursive;
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
    color: #fff;
    font-family: 'Lobster', cursive;
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
