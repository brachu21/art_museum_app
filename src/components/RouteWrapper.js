import React from 'react';
import App from "../App";
import Header from "./header/Header";
import AppWrapper from "../styles/AppWrapper";
import MainPage from "../pages/main/MainPage";
import CollectionsPage from "../pages/collections/CollectionsPage";
import ExhibitionPreviewPage from "../pages/exhibition/ExhibitionPreviewPage";
import PlanVisitPage from "../pages/planyourvisit/PlanVisitPage";
import NotFoundPage from "./404";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';

const RouteWrapper = ({menuOpen}) => (
    <Route path="/" component={App}>
        <Header/>
        <AppWrapper menuOpen={menuOpen}>
            <Route path="/" component={MainPage}/>
            <Route path="/collections" component={CollectionsPage}/>
            <Route path="/exhibition" component={ExhibitionPreviewPage}/>
            <Route path="/planyourvisit" component={PlanVisitPage}/>
            <Route path="/404" component={NotFoundPage}/>
        </AppWrapper>
    </Route>
);

function mapState(state) {
    return {menuOpen: state.menuOpen}
}

export default connect(mapState, null)(RouteWrapper)
