import React from 'react';
import Menu from './menu/menu';
import {Nav, SectionTitle, NavWrapper, Logo} from './StyledHeader';
import {Link} from 'react-router-dom';
const Header = ({PageTitle}) => (
    <Nav>
        <NavWrapper>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/'}><Logo>the<br/>art<br/>museum</Logo></Link>
            <SectionTitle>{PageTitle}</SectionTitle>
            <Menu/>
        </NavWrapper>
    </Nav>
);

export default Header;
