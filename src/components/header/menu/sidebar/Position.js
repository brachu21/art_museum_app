import React from 'react';
import {MenuPosition} from './StyledSidebar'

const Position = ({icon, title}) => (
    <MenuPosition>
        <img src={icon}/>
        <a>{title}</a>
    </MenuPosition>
);

export default Position;
