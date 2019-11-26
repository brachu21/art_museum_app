import styled from 'styled-components';

const HintText = styled.a`
  font-size: 12px;
  color: ${({theme}) => theme.color.primaryColor};
  font-weight: ${({theme}) => theme.font.semibold};
  margin-top: 8px;
  margin-bottom: 12px;
 
`;
export default HintText;
