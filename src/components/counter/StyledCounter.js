import styled from 'styled-components';

const StyledCounterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  
`;
const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  p {
    font-size: 18px;
    font-weight: ${({theme}) => theme.font.semibold};
    margin: 0;
  }
  a {
    font-size: 12px;
    color:  ${({theme}) => theme.color.shaded}
  }
`;

const StyledIncrementor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  p {
    margin-left: 8px;
    margin-right: 8px;
    color: ${(props) => props.quantity ? '#000' : '#888'};
  }
`;

export {StyledCounterSection, StyledCounter, StyledIncrementor};
