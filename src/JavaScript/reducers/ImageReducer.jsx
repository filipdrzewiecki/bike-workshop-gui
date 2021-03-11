import { FETCH_IMAGE } from '../Content/api/apiActions.jsx'

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_IMAGE:
            return { ...state, payload: action.payload};
        default:
            return state;
        }
};