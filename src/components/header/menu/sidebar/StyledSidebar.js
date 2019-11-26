import styled from 'styled-components'

const StyledSidebar = styled.nav`
  z-index: 4;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.color.primaryColor};
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  padding: 18px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  text-align: left;
  
  
 ul {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-bottom: 24px;
  }
 }

  @media (max-width: 576px) {
      width: 80%;
    }

`;

const MenuPosition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  img {
    margin-right: 16px;
    width: 25px;
    height: 25px;
  }
   a {
    text-transform: full-width;
    font-size: ${({theme}) => theme.dimensions.sidebarFontSize};
    font-weight: ${({theme}) => theme.font.regular};
    color: ${({theme}) => theme.color.white};
    text-decoration: none;
    transition: color 0.3s linear;
    
    &:hover {
      color: ${({theme}) => theme.color.white};
    }
  }
`;

export {StyledSidebar, MenuPosition};
