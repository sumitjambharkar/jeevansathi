import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import images2 from "../image/logos.png";


const Head = () => {
  const navigate = useNavigate()
  const goWebsite = () => {
    navigate({pathname:"/"})
  }
  return (
    <Header>
       <div onClick={goWebsite} class="logoS"><img src={images2}/></div>
       <div class="btnss"><h5 style={{paddingLeft:"15px"}}>Free Membership</h5></div>
    </Header>
  )
}

export default Head;

const Header = styled.div`
display: flex;
  justify-content: space-around;
  background-color:#B01E68;
  align-items: center;
  padding:6px;
  >.btnss h5 {
    font-family: romon;
    color:white;
    align-items: center;
  }
  .logoS img{
  width: 200px;
}
  @media (max-width: 500px) {
    >.btnss h5 {
     display: none;
  }
  }
`