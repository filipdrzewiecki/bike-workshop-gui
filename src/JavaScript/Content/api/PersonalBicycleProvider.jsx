import React, { useReducer, createContext, useEffect } from "react";
import { authHeader } from '../../Page/Security/authHeader';
import * as API_ACTIONS from './apiActions.jsx'
import BicycleReducer from '../../reducers/bicycleReducer';
import bikeWorkshop from './bike-workshop-service.jsx'
import { getUserName }  from '../../Page/Security/authHeader';
import { useParams } from 'react-router-dom';

export const PersonalBicycleContext = createContext();

const PersonalBicycleProvider = (props) => {
  const [bicycle, dispatch] = useReducer(BicycleReducer);

  const bike = useParams().bike;

  function fetchBicycles(response) {
    return {
      type: API_ACTIONS.GET_BICYCLE,
      payload: response.data
    }
  }

  const dispatchBicycle = () => {
    bikeWorkshop.get(`${getUserName()}/bicycles/${bike}`, {headers: authHeader()})
    .then((response) => {
      dispatch(fetchBicycles(response));
    });
  };

  useEffect(dispatchBicycle, []);

  return (
    <PersonalBicycleContext.Provider
      value={{
        bicycle: bicycle,
        dispatch: dispatchBicycle
      }}>

      {props.children}
    </PersonalBicycleContext.Provider>
  );
};

export default PersonalBicycleProvider;