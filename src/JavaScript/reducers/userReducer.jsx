import { LOG_IN, LOG_OUT } from '../Page/Security/types.jsx'

const defaultState = {
    loggedIn: false,
    user: {}
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case LOG_IN:
            return {
                loggedIn: true,
                user: {...action.payload}
            }
        case LOG_OUT:
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        default: return state
    }
}

export default userReducer