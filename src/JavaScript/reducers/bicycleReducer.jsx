import _ from 'lodash';
import { CREATE_BICYCLE, GET_BICYCLE, GET_BICYCLES, UPDATE_BICYCLE, DELETE_BICYCLE } from '../actions/types.jsx'

export default (state={}, action) => {
    switch(action.type) {
        case GET_BICYCLES:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case GET_BICYCLE:
            return { ...state, [action.payload.id]: action.payload};
        case CREATE_BICYCLE:
            return { ...state, [action.payload.id]: action.payload};
        case UPDATE_BICYCLE:
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_BICYCLE:
            return _.omit(state, action.payload);
        default:
            return state;

        }
};
