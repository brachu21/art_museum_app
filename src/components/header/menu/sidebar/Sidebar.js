import React from 'react';
import {Link} from 'react-router-dom';
import {StyledSidebar, MenuPosition} from './StyledSidebar';
import Position from "./Position";
import Collections from '../../../../img/Collections.svg';
import Ellipse13 from '../../../../img/Ellipse 13.svg';
import Rectangle3 from '../../../../img/Rectangle 3.svg';
import Rectangle24 from '../../../../img/Rectangle 24.svg';
import Shop from '../../../../img/Shop.svg';
import Subtract from '../../../../img/Subtract.svg';
import Searchbar from "./Searchbar";
import {connect} from "react-redux";


const Sidebar = ({open}) => {

    const positions = [
        {
            title: "Exhibitions & Events",
            link: '/exhibition',
            icon: Rectangle3,
        },
        {
            title: "Artists & Artworks",
            link: '/404',
            icon: Ellipse13,
        },
        {
            title: "Collections",
            link: '/collections',
            icon: Collections,
        },
        {
            title: "Plan Your Visit",
            link: '/planyourvisit',
            icon: Subtract,
        },
        {
            title: "Become a Member",
            link: '/404',
            icon: Rectangle24,
        },
        {
            title: "Shop",
            link: '/404',
            icon: Shop
        }
    ];

    return (
        <StyledSidebar open={open}>
            <ul>
                <li><Searchbar/></li>
                {positions.map(p => (
                    <li>
                        <Link style={{textDecoration: 'none'}} to={p.link}>
                            <Position title={p.title} icon={p.icon}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledSidebar>
    );
};

function mapState(state) {
    return {open: state.menuOpen}
}

export default connect(mapState)(Sidebar);

