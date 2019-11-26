import styled from 'styled-components';

const CalendarComponent = styled.div`
  width: 100vw;
  max-width: 100%;
  text-align: center;
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10%;
`;

const ActivePosition = styled.div`
  margin-left: auto;
  margin-right: auto;
  p {
    color: #000;
  }
  div {

  }
`;

const DisablePosition = styled.div`
  opacity: 0.4;
  transition: 0.2s ease;
  
  div {
 
  }
  p {
    margin: 4px;
  }
  :hover {
    opacity: 1;
  }
`;

const Stroke = styled.div`
   background: #000;
   height: 2px;
   width: 30vw;
`;

const StrokeActive = styled.div`
    background: #FF473A;
    height: 4px;
    width: 30vw;
`;

const DateComponent = styled.div`
  text-align: center;
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  margin-top: 12px;
  font-size: 12px;
`;
export {CalendarComponent, ActivePosition, DisablePosition, DateComponent, Stroke, StrokeActive};
