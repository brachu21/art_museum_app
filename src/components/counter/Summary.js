import React from 'react';
import styled from 'styled-components';

const Stroke = styled.div`
  height: 2px;
  background: ${({theme}) => theme.color.primaryColor};
`;
const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  p {
    font-size: 18px;
    font-weight: ${({theme}) => theme.font.semibold};
    margin-top: 4px;
  }
`
const Summary = ({cost}) => (
    <>
        <Stroke/>
        <TotalRow>
            <p>Total</p>
            <p>${cost}</p>
        </TotalRow>
    </>
);
export default Summary;
