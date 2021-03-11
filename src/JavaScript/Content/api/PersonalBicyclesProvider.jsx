import React, { useReducer, createContext, useEffect } from "react";
import { authHeader } from '../../Page/Security/authHeader';
import * as API_ACTIONS from './apiActions.jsx'
import BicycleReducer from '../../reducers/bicycleReducer';
import bikeWorkshop from './bike-workshop-service.jsx'
import { getUserName }  from '../../Page/Security/authHeader';

export const PersonalBicyclesContext = createContext();

const PersonalBicyclesProvider = (props) => {
  const [bicycles, dispatch] = useReducer(BicycleReducer);


  function fetchBicycles(response) {
    return {
      type: API_ACTIONS.GET_BICYCLES,
      payload: response.data
    }
  }

  const dispatchBicycles = () => {
    bikeWorkshop.get(`${getUserName()}/bicycles`, {headers: authHeader()})
    .then((response) => {
      dispatch(fetchBicycles(response));
    });
  };

  useEffect(dispatchBicycles, []);

  return (
    <PersonalBicyclesContext.Provider
      value={{
        bicycles: bicycles,
        dispatch: dispatchBicycles
      }}>

      {props.children}
    </PersonalBicyclesContext.Provider>
  );
};

export default PersonalBicyclesProvider;