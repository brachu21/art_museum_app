import styled from 'styled-components';

const AppWrapper = styled.div`
  //height: calc(100vh - 60px);
  max-width: 90%;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 60px;
  //background: pink;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => props.menuOpen ? 'translateX(92%)' : 'translateX(0)'};
`;
export default AppWrapper;

