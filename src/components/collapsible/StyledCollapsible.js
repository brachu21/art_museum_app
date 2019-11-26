import styled from 'styled-components';

const CollapsibleComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  p {
    color: #979797;
    text-transform: uppercase;
    font-size: 10px;
  }
`;

const CollapsibleButton = styled.a`
  height: 24px;
  width: 24px;
  transition: 0.3s ease-in-out;
  transform: ${(props) => props.open ? '' : 'rotate(90deg)'};
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
`;

const Biography = styled.p`
  font-weight: lighter;
  font-size: 10px;
  color: #979797;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => props.open ? '1' : '0'};  
`
export {CollapsibleComponent, CollapsibleButton, Biography}
