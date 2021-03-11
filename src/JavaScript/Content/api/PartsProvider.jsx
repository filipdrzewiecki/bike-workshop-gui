import React, { useReducer, createContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { authHeader } from '../../Page/Security/authHeader';
import * as API_ACTIONS from './apiActions.jsx'
import PartReducer from '../../reducers/partReducer.jsx';
import bikeWorkshop from './bike-workshop-service.jsx'

export const PartContext = createContext();

const PartProvider = (props) => {
  const [parts, dispatch] = useReducer(PartReducer);

  const partType = useParams().part;

  function fetchParts(response) {
    return {
      type: API_ACTIONS.FETCH_PARTS_WITH_FILTERS,
      payload: response.data
    }
  }

  const dispatchParts = (filters) => {
    bikeWorkshop.get(`/parts/${partType}?` + filters, {headers: authHeader()})
    .then((response) => {
      dispatch(fetchParts(response));
    });
  };

  useEffect(dispatchParts, []);

  return (
    <PartContext.Provider
      value={{
        parts: parts,
        dispatch: dispatchParts
      }}>

      {props.children}
    </PartContext.Provider>
  );
};

export default PartProvider;


