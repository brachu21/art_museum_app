import styled from 'styled-components';

const Button = styled.button`
  width: 248px;
  background: ${({theme}) => theme.color.primaryColor};
  color: ${({theme}) => theme.color.white};
  padding: ${({theme}) => theme.dimensions.inputPadding};
  border: 0px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgb(136,136,136, 0.4);
`;

export default Button;
