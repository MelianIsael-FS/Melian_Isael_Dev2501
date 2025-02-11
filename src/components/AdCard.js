import React from 'react';
import styled from 'styled-components';

const AdCardContainer = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const AdImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const AdText = styled.div`
  padding: 10px;
`;

const AdCard = ({ title, subtitle, image }) => (
  <AdCardContainer>
    <AdImage src={image} alt="Ad" />
    <AdText>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </AdText>
  </AdCardContainer>
);

export default AdCard;