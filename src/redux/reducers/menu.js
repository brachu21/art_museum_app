import * as types from '../actions/actionTypes';
import {OPEN_MENU} from "../actions/actionTypes";

const initialState = {
    menuOpen: false
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
        default:
            return state;
    }
}

export default menu;
