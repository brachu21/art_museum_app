import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  max-width: 100%;
  height: 60px;
  max-height: 60px;
  max-width: 100%;
  background-color: ${({theme}) => theme.color.white};
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 4;
`;

const Logo = styled.p`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: ${({theme}) => theme.font.regular};
`;

const NavWrapper = styled.div`
 margin-right: auto;
 margin-left: auto;
 width: ${({theme}) => theme.dimensions.layoutWidth};
 max-width: ${({theme}) => theme.dimensions.layoutWidth};
 display: flex;
 flex-direction: row;
 align-content: center;
 align-items: center;
 justify-content: space-between;
`;

const SectionTitle = styled.p`
  color: red;
  font-size: ${({theme}) => theme.dimensions.sidebarFontSize};
`;


export {Nav, SectionTitle, NavWrapper, Logo};
