import React from 'react';

import styled from 'styled-components';

const SubTitle = styled.p`
  text-transform: uppercase;
  color: #999;  
  font-size: 10px;
`;
const Title = styled.h1`
  width: 50%;
  margin-top: 2px;
  text-transform: uppercase;
  color: #000;  
  font-weight: ${({theme}) => theme.font.semibold};
  font-size: 24px;
`;
const Date = styled.p`
  text-transform: uppercase;
  font-weight: ${({theme}) => theme.font.semibold};
  color: ${({theme}) => theme.color.primaryColor};  
  font-size: 14px;
`;


const Description = ({subTitle, title, date, where}) => (
    <div>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <SubTitle>{where}</SubTitle>
    </div>
);

export default Description;
