import { LOG_IN, LOG_OUT } from './types';
import history from '../../../history';

import axios from 'axios';

const auth = axios.create({
    baseURL: 'http://localhost:8080'
})

const setUser = (payload) => ({ type: LOG_IN, payload})

export const logUserOut = () => ({type: LOG_OUT})

// Methods


const refreshPage = ()=>{
    window.location.reload();
 }

export const fetchUser = formValues =>  async dispatch => {
    const response = await auth.post(`http://localhost:8080/authentication/login`, formValues);

    dispatch({type: LOG_IN, payload: response.data});

    localStorage.setItem("token", response.data.token)

    history.push('/garage')
}


// export const fetchUser = (userInfo) => dispatch => {
//     fetch(`http://localhost:8080/authentication/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(userInfo)
//     })
//     .then(res => res.json())
//     .then(data => {
//         // data sent back will in the format of
//         // {
//         //     user: {},
//         //.    token: "aaaaa.bbbbb.bbbbb"
//         // }
//         localStorage.setItem("token", data.token)
//         dispatch(setUser(data.user))
//     })
// }

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

export const autoLogin = () => dispatch => {

    console.log('token ' + localStorage.getItem("token"));

    fetch(`http://localhost:8080/bicycles`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "token": `${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        localStorage.setItem("token", data.token)
        //dispatch(setUser(data.user))
    })
}