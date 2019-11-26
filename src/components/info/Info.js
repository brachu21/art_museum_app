import React from 'react';
import {InfoIcon, InfoText} from './InfoIcon';

const Info = ({icon, text}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center'
        }}>
            <InfoIcon src={icon}/>
            <InfoText>{text}</InfoText>
        </div>
    )
};

export default Info;
