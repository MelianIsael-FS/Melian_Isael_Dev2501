import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUserCircle, FaCog } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const SearchBar = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>My App</Logo>
    <SearchBar placeholder="Search..." />
    <IconsContainer>
      <FaSearch />
      <FaUserCircle />
      <FaCog />
    </IconsContainer>
  </HeaderContainer>
);

export default Header;