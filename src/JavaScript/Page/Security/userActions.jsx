import { LOG_IN, LOG_IN_ERROR, REGISTER, REGISTER_ERROR } from './types';
import history from '../../../history';

import axios from 'axios';

const auth = axios.create({
    baseURL: 'http://localhost:8080'
})

//const setUser = (payload) => ({ type: LOG_IN, payload})

function loginWithSuccess(response) {
    return {
      type: LOG_IN,
      payload: response.data
    }
  }
  
  function errorWileLogging(err) {
    return {
      type: LOG_IN_ERROR,
      payload: err.response.data
    }
  }

  export function fetchUser(formValues) {
    return function(dispatch) {
      auth.post(`http://localhost:8080/authentication/login`, formValues)
        .then((response) => {
          dispatch(loginWithSuccess(response))
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userName", response.data.userName)
          localStorage.setItem("roles", response.data.roles)
          history.push(`/${response.data.userName}/garage`)
          window.location.reload();
        })
        .catch((err) => {
          dispatch(errorWileLogging(err))
        })
    }
  }

  function registerWithSuccess(response) {
    return {
      type: REGISTER,
      payload: response.data
    }
  }
  
  function errorWhileRegister(err) {
    return {
      type: REGISTER_ERROR,
      payload: err.response.data
    }
  }

  export function registerUser(formValues) {
    return function(dispatch) {
      auth.post(`http://localhost:8080/user/register`, formValues)
        .then((response) => {
          dispatch(registerWithSuccess(response))
          history.push(`/login`)
        })
        .catch((err) => {
          dispatch(errorWhileRegister(err))
          console.log(err)
        })
    }
  }


// export const registerUser = formValues =>  async dispatch => {
//     const response = await auth.post(`http://localhost:8080/user/register`, formValues);

//     dispatch({type: REGISTER, payload: response.data});

//     history.push(`/login`)
// }

// export const getUser = formValues =>  async dispatch => {
//     const response = await auth.post(`http://localhost:8080/authentication/login`, formValues);

//     console.log(response.data.status)
//     console.log(response.data.statusText)


//     dispatch({type: LOG_IN, payload: response.data});

    

//     localStorage.setItem("token", response.data.token)
//     localStorage.setItem("userName", response.data.userName)

//     history.push(`/${response.data.userName}/garage`)

//     window.location.reload();
// }