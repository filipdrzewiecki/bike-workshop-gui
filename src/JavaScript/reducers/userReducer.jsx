import { LOG_IN, LOG_OUT, LOG_IN_ERROR, REGISTER, REGISTER_ERROR } from '../Page/Security/types.jsx'

const defaultState = {
    loggedIn: false,
    user: {}
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                loggedIn: true,
                user: { ...action.payload },
                error: {},
            }
        case LOG_OUT:
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        case LOG_IN_ERROR:
            return {
                loggedIn: false,
                user: {},
                error: { ...action.payload },
            }
        case REGISTER:
            return {
                loggedIn: false,
                user: { ...action.payload },
                error: {},
            }
        case REGISTER_ERROR:
            return {
                loggedIn: false,
                user: {},
                error: { ...action.payload },
            }
        default: return state
    }
}

export default userReducer