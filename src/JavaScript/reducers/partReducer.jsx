import { FETCH_FRAME, ADD_FRAME_TO_BICYCLE } from '../actions/bicycleOperationTypes.jsx'

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_FRAME:
            return { ...state, part: action.payload};
        case ADD_FRAME_TO_BICYCLE:
            return { ...state, [action.payload.id]: action.payload};
        default:
            return state;

        }
};