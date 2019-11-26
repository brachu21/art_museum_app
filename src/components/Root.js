import React from 'react'
import {connect, Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import theme from "../utils/theme";
import LoginPage from "../pages/login/LoginPage";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import RouteWrapper from "./RouteWrapper";


const GlobalStyle = createGlobalStyle`
      body {
        padding: 0;
        margin: 0;
        font-family: Montserrat, serif;
      }
      *, *::before, *::after {
        box-sizing: border-box;
      }
    `;



const Routing = ({menuOpen}) => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <RouteWrapper/>
                </Switch>
            </Router>
        </ThemeProvider>
    </>
);

const Root = ({store}) => (
    <Provider store={store}>
        <Routing/>
    </Provider>
);

function mapState(state) {
    return {menuOpen: state.menuOpen}
}

export default connect(mapState, null)(Root);
