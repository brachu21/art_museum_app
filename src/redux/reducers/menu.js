import * as types from '../actions/actionTypes';

const initialState = {
    menuOpen: false
};

function menu(state = initialState, action) {
    if (action.type === types.OPEN_MENU) {
        return Object.assign({}, state, {
            menuOpen: !state.menuOpen
        });
    } else {
        return state;
    }
}

export default menu;
