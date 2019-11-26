import React from 'react';
import styled from 'styled-components';

const Dots = ({photos}) => (
    <DotsContainer>{photos.map(p => (
        <Dot/>
    ))}
    </DotsContainer>
);

const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 6px;
  background-color: ${(props) => props.active ? '#FF473A' : 'white'};
  border: 1px solid ${({theme}) => theme.color.primaryColor};
`;

export default Dots;
