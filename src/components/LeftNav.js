import React from 'react';
import styled from 'styled-components';

const LeftNavContainer = styled.nav`
  width: 200px;
  background-color: #333;
  color: white;
  height: 100vh;
  padding: 20px;
`;

const NavLink = styled.a`
  display: block;
  margin: 10px 0;
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #4CAF50;
  }
`;

const LeftNav = () => (
  <LeftNavContainer>
    <NavLink href="#">Newsfeed</NavLink>
    <NavLink href="#">Messages</NavLink>
    <NavLink href="#">Watch</NavLink>
  </LeftNavContainer>
);

export default LeftNav;