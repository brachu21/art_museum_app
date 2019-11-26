import styled from 'styled-components';

const InfoIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 4px;
  svg {
      fill: ${({theme}) => theme.color.primaryColor};
  }
`;
const InfoText = styled.p`
width: 70%;
  font-size: 12px;
  color: ${({theme}) => theme.color.primaryColor};
  font-weight: ${({theme}) => theme.font.semibold};
`;

export {InfoIcon, InfoText};
