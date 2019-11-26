import React from 'react';
import styled from 'styled-components';
import Ellipse from '../../../../img/Ellipse.svg';

const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
};

const Searchfield = styled.input.attrs({
    type: "text",
    color: 'white'
})`
  width: 80%;
  border: 2px solid ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.primaryColor};
  font-size: ${({theme}) => theme.dimensions.sidebarFontSize};
  padding: 6px 12px;
  ::placeholder {
     color: ${({theme}) => theme.color.white};
  }
`;

const Searchbar = () => (
    <div style={style}>
        <img style={{marginRight: '16px'}} src={Ellipse}/>
        <Searchfield placeholder="Search" type="text"/>
    </div>
);

export default Searchbar;
