import React, {useState, useContext} from 'react';
import {CollapsibleComponent, CollapsibleButton, Biography} from './StyledCollapsible';
import Icon from '../../img/collapsible/down.svg';

const Collapsible = ({title, text}) => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div ref={node} style={{marginTop: '8%'}}>
            <CollapsibleComponent>
                <p>{title}</p>
                <CollapsibleButton open={open} onClick={() => handleClick()} icon={Icon}/>
            </CollapsibleComponent>
            <Biography open={open}>{text}</Biography>
        </div>
    )

};

export default Collapsible;
