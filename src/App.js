import React from 'react';
import AppWrapper from "./styles/AppWrapper";
import Header from './components/header/Header';
import {connect} from "react-redux";
import {compose} from 'redux';

import {withRouter} from 'react-router-dom'

class App extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <AppWrapper menuOpen={this.props.menuOpen}>
                    {this.props.children}
                </AppWrapper>
            </>
        )
    }
}

function mapState(state) {
    return {menuOpen: state.menuOpen}
}

function mapDispatch (dispatch) {
    return {
        closeMenu() {
            dispatch({ type: 'CLOSE_MENU'})
        }
    }
}

export default compose(withRouter, connect(mapState, mapDispatch)(App));

