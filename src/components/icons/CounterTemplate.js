import styled from 'styled-components';

const CounterTemplate = styled.button`
  background-color: white;
  width: 18px;
  height: 18px;
  color: #888;
  border: 1px solid #888;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  opacity: 0.6;
  
  &:hover {
    opacity: 1;
  }
`;

export default CounterTemplate;
