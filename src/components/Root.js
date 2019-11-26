import React from 'react'
import {connect, Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import theme from "../utils/theme";
import LoginPage from "../pages/login/LoginPage";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import RouteWrapper from "./RouteWrapper";
import App from "../App";
import Header from "./header/Header";
import AppWrapper from "../styles/AppWrapper";
import MainPage from "../pages/main/MainPage";
import CollectionsPage from "../pages/collections/CollectionsPage";
import ExhibitionPreviewPage from "../pages/exhibition/ExhibitionPreviewPage";
import PlanVisitPage from "../pages/planyourvisit/PlanVisitPage";
import NotFoundPage from "./404";

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

const NavRoute = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
        <div>
            <Header/>
            <Component {...props}/>
        </div>
    )}/>
)

const Routing = ({menuOpen}) => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <RouteWrapper/>
                    {/*<Route path="/" component={App}>*/}
                    {/*    <Header/>*/}
                    {/*    <AppWrapper menuOpen={menuOpen}>*/}
                    {/*        <Route path="/main" component={MainPage}/>*/}
                    {/*        <Route path="/collections" component={CollectionsPage}/>*/}
                    {/*        <Route path="/exhibition" component={ExhibitionPreviewPage}/>*/}
                    {/*        <Route path="/planyourvisit" component={PlanVisitPage}/>*/}
                    {/*        <Route path="/404" component={NotFoundPage}/>*/}
                    {/*    </AppWrapper>*/}
                    {/*</Route>*/}
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
