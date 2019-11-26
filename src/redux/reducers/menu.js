import * as types from '../actions/actionTypes';
import {OPEN_MENU} from "../actions/actionTypes";

const initialState = {
    menuOpen: false,
    isLogged: false
};

function menu(state = initialState, action) {
    switch (action.type) {
        case types.OPEN_MENU:
            return Object.assign({}, state, {
                menuOpen: !state.menuOpen
            });
        case types.CLOSE_MENU:
            return Object.assign({}, state, {
                menuOpen: false
            });
        case "LOG_IN":
            return Object.assign({}, state, {
                isLogged: true
            });
        case "LOG_OUT":
            return Object.assign({}, state, {
                isLogged: false
            });
        default:
            return state;
    }
}

export default menu;
