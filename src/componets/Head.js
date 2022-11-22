import React from 'react'
import styled from 'styled-components';
import images2 from "./image/logos.png";

const Head = () => {
  return (
    <Header>
       <div class="logoS"><img src={images2}/></div>
       <div class="btnss"><h5 style={{paddingLeft:"15px"}}>Free Membership</h5></div>
    </Header>
  )
}

export default Head;

const Header = styled.div`
display: flex;
  justify-content: space-around;
  align-items: center;
  padding:6px;
  >.btnss h5 {
    font-family: romon;
    color:black;
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