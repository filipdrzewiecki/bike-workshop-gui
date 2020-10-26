import bikeWorkshop from './bike-workshop-service.jsx'
import * as API_ACTIONS from '../../actions/bicycleOperationTypes.jsx'
import history from '../../../history';
import { authHeader } from '../../Page/Security/authHeader';
import { getUserName }  from '../../Page/Security/authHeader';

const refreshPage = ()=> {
    window.location.reload();
 }

 /* BICYCLES */
export const getBicycles = () =>  async dispatch => {
    const response = await bikeWorkshop.get(`${getUserName()}/bicycles`, {headers: authHeader()});
    dispatch({type: API_ACTIONS.GET_BICYCLES, payload: response.data});
}

export const getBicycle = (name) =>  async dispatch => {
    const response = await bikeWorkshop.get(`${getUserName()}/bicycles/${name}`, {headers: authHeader()});
    dispatch({type: API_ACTIONS.GET_BICYCLE, payload: response.data});
}

export const createBicycle = (formValues) =>  async dispatch => {
    const response = await bikeWorkshop.post(`${getUserName()}/bicycles`, formValues, {headers: authHeader()});
    dispatch({type: API_ACTIONS.CREATE_BICYCLE, payload: response.data});
    history.push(`/${getUserName()}/garage`)
}

export const updateBicycle = (id, formValues) =>  async dispatch => {
    const response = await bikeWorkshop.put(`${getUserName()}/bicycles/${id}`, formValues, {headers: authHeader()});
    dispatch({type: API_ACTIONS.UPDATE_BICYCLE, payload: response.data});
    history.push(`/${getUserName()}/garage`)
}

export const deleteBicycle = (id) =>  async dispatch => {
    const response = await bikeWorkshop.delete(`${getUserName()}/bicycles/${id}`, {headers: authHeader()});
    dispatch({type: API_ACTIONS.DELETE_BICYCLE, payload: response.data});
    history.push(`/${getUserName()}/garage`)
    refreshPage();
}
 /* BICYCLES */

 /* BICYCLE_PARTS */

export const addPartToBicycle = (id, formValues) =>  async dispatch => {
    const response = await bikeWorkshop.post(`${getUserName()}/bicycles/${id}/frame`, formValues, {headers: authHeader()});
    dispatch({type: API_ACTIONS.ADD_BICYCLE_PART, payload: response.data});
    history.push(`/${getUserName()}/garage`)
}

export const fetchBicyclePart = (bicycle, part) =>  async dispatch => {
    const response = await bikeWorkshop.get(`${getUserName()}/bicycles/${bicycle}/${part}`, {headers: authHeader()});
    dispatch({type: API_ACTIONS.FETCH_BICYCLE_PART, payload: response.data});
}

 /* BICYCLE_PARTS */

 /* PARTS */


export const fetchPart = (partType, id) =>  async dispatch => {
    const response = await bikeWorkshop.get(`parts/${partType}/${id}`, {headers: authHeader()});
    dispatch({type: API_ACTIONS.FETCH_PART, payload: response.data});
}

export const fetchParts = (partType) =>  async dispatch => {
    const response = await bikeWorkshop.get(`parts/${partType}`, {headers: authHeader()});
    dispatch({type: API_ACTIONS.FETCH_PARTS, payload: response.data});
}

export const createPart = (partType, formValues) =>  async dispatch => {
    const response = await bikeWorkshop.post(`parts/${partType}`, formValues, {headers: authHeader()});
    dispatch({type: API_ACTIONS.CREATE_PART, payload: response.data});
    history.push(`/parts/${partType}`)
}

 /* PARTS */

