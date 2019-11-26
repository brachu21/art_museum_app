import React from 'react';
import Hamburger from "./StyledHamburger";
import {connect} from 'react-redux';

const hamburger = ({open, onMenuClick}) => (
    <Hamburger open={open} onClick={() => onMenuClick()}>
       <div/>
       <div/>
       <div/>
    </Hamburger>
);


function mapState (state) {
    return { open: state.menuOpen }
}

function mapDispatch (dispatch) {
    return {
        onMenuClick() {
            dispatch({ type: 'OPEN_MENU'})
        }
    }
}

export default connect(mapState, mapDispatch)(hamburger);
