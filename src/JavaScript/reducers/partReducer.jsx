import { FETCH_BICYCLE_PART, ADD_BICYCLE_PART, FETCH_PARTS, FETCH_PART, ADD_EXISTRING_PART_TO_BICYCLE, FETCH_PARTS_WITH_FILTERS} from '../Content/api/apiActions.jsx'

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_BICYCLE_PART:
            return { ...state, part: action.payload};
        case ADD_BICYCLE_PART:
            return { ...state, [action.payload.id]: action.payload};
        case FETCH_PART:
            return { ...state, part: action.payload};
        case FETCH_PARTS:
            return { ...state, parts: action.payload.content};
        case FETCH_PARTS_WITH_FILTERS:
            return { ...state, payload: action.payload};
        case ADD_EXISTRING_PART_TO_BICYCLE:
            return { ...state, bicycle: action.payload};
        default:
            return state;
        }
};