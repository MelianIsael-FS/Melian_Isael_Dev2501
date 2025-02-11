import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${(props) => props.bgColor || '#4CAF50'};
  color: ${(props) => props.color || 'white'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ text, onClick, bgColor, color }) => (
  <ButtonStyled bgColor={bgColor} color={color} onClick={onClick}>
    {text}
  </ButtonStyled>
);

export default Button;