import bikeWorkshop from './bike-workshop-service.jsx'
import { CREATE_BICYCLE, GET_BICYCLE, GET_BICYCLES, UPDATE_BICYCLE, DELETE_BICYCLE } from '../../actions/types.jsx'
import history from '../../../history';

export const createBicycle = formValues =>  async dispatch => {
    const response = await bikeWorkshop.post('/bicycles', formValues);

    dispatch({type: CREATE_BICYCLE, payload: response.data});
    history.push('/garage')
}

export const getBicycles = () =>  async dispatch => {
    const response = await bikeWorkshop.get(`/bicycles`);

    dispatch({type: GET_BICYCLES, payload: response.data});
}

export const getBicycle = (id) =>  async dispatch => {
    const response = await bikeWorkshop.get(`/bicycles/${id}`);

    dispatch({type: GET_BICYCLE, payload: response.data});
}

export const updateBicycle = (id, formValues) =>  async dispatch => {
    const response = await bikeWorkshop.put(`/bicycles/${id}`, formValues);

    dispatch({type: UPDATE_BICYCLE, payload: response.data});
}

export const deleteBicycle = (id) =>  async dispatch => {
    await bikeWorkshop.delete(`/bicycles/${id}`);

    dispatch({type: DELETE_BICYCLE, payload: id});
}