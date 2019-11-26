import styled from 'styled-components';

const LoginContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  div {
      max-width: ${({theme}) => theme.dimensions.loginLayoutWidth};
      width: ${({theme}) => theme.dimensions.loginLayoutWidth};
      margin-right: auto;
      margin-left: auto;
      display: flex;
      flex-direction: column;  
      margin-bottom: 32px;
      &:last-child {
        margin-bottom: 10%;
      }
  }
`;
const Address = styled.a`
  color: ${({theme}) => theme.color.white};
  font-size: 0.8rem;
`;

const BluredBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //TODO self host render
  background-image: url(${props => props.image || ""}); 
  background-color: ${({theme}) => theme.color.black};
  filter: blur(2px);
  transform: scale(1.15);
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  
`;

const Title = styled.p`
    text-transform: uppercase;
    margin: 0;
    font-size: 36px;
    color: ${({theme}) => theme.color.white};
    font-weight: ${({theme}) => theme.font.semibold};
`;

const Input = styled.input`
  font-size: 12px;
  font-weight: bold;
  color: #000;
  border: 1px solid black;
  cursor: text;
  padding: ${({theme}) => theme.dimensions.inputPadding};
  ::placeholder {
      color: #888;
  }
`;

const Hint = styled.a`
  color: ${({theme}) => theme.color.white};
  font-size: ${({theme}) => theme.dimensions.hintFontSize};
  text-decoration: none;
  padding-top: 6px;
  cursor: pointer;
  text-align: ${(props) => props.alignRight ? 'right' : 'left'};
  font-weight: ${({theme}) => theme.font.regular};
`;
export {LoginContent, BluredBackground, Input, Hint, Title, Address};
