import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: #FFA500;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  @media (max-width: 768px) {
    height:0px;
    background-color: white;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar