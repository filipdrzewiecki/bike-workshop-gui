import bikeWorkshop from './bike-workshop-service.jsx'
import { CREATE_BICYCLE, GET_BICYCLE, GET_BICYCLES, UPDATE_BICYCLE, DELETE_BICYCLE } from '../../actions/types.jsx'
import history from '../../../history';
import { authHeader } from '../../Page/Security/authHeader';
import { getUserName }  from '../../Page/Security/authHeader';

const refreshPage = ()=>{
    window.location.reload();
 }

export const getBicycles = () =>  async dispatch => {
    const response = await bikeWorkshop.get(`${getUserName()}/bicycles`, {headers: authHeader()});

    dispatch({type: GET_BICYCLES, payload: response.data});
}

export const getBicycle = (name) =>  async dispatch => {
    const response = await bikeWorkshop.get(`${getUserName()}/bicycles/${name}`, {headers: authHeader()});

    dispatch({type: GET_BICYCLE, payload: response.data});
}

export const createBicycle = (formValues) =>  async dispatch => {
    const response = await bikeWorkshop.post(`${getUserName()}/bicycles`, formValues, {headers: authHeader()});

    dispatch({type: CREATE_BICYCLE, payload: response.data});
    history.push(`/${getUserName()}/garage`)
}

export const updateBicycle = (id, formValues) =>  async dispatch => {
    const response = await bikeWorkshop.put(`${getUserName()}/bicycles/${id}`, formValues, {headers: authHeader()});

    dispatch({type: UPDATE_BICYCLE, payload: response.data});
    history.push(`/${getUserName()}/garage`)
}

export const deleteBicycle = (id) =>  async dispatch => {
    const response = await bikeWorkshop.delete(`${getUserName()}/bicycles/${id}`, {headers: authHeader()});

    dispatch({type: DELETE_BICYCLE, payload: response.data});
    history.push(`/${getUserName()}/garage`)
    refreshPage();
}