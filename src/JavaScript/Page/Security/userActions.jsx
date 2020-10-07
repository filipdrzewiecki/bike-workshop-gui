import { LOG_IN, LOG_OUT } from './types';
import history from '../../../history';

import axios from 'axios';

const auth = axios.create({
    baseURL: 'http://localhost:8080'
})

const setUser = (payload) => ({ type: LOG_IN, payload})

export const logUserOut = () => ({type: LOG_OUT})



export const fetchUser = formValues =>  async dispatch => {
    const response = await auth.post(`http://localhost:8080/authentication/login`, formValues);

    dispatch({type: LOG_IN, payload: response.data});

    localStorage.setItem("token", response.data.token)
    localStorage.setItem("userName", response.data.userName)

    history.push(`/${response.data.userName}/garage`)

    window.location.reload();

}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`http://localhost:4000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}