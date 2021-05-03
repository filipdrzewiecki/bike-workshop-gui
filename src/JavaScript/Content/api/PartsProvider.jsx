import React, { createContext, useEffect, useState } from "react";
import { authHeader } from '../../Page/Security/authHeader';
import bikeWorkshop from './bike-workshop-service.jsx'
import { getUserName }  from '../../Page/Security/authHeader';
import { getQueryParams } from '../../Page/PageElements/Utils.jsx'

export const PartContext = createContext();

const PartProvider = (props) => {
  const [parts, dispatch] = useState();
  const [filters, setFilters] = useState({'partType': 'common'});

  const dispatchParts = (fltrs, event) => {
    var filtersMap = fltrs == null ? new Map() : fltrs;

    if (event != null) {
      filtersMap.set("partType", event.target.value)
    }

    var URI = props.isPersonal===true ? `/${getUserName()}/parts` : '/parts';

    bikeWorkshop.get(URI + '?' + getQueryParams(filtersMap), {headers: authHeader()})
    .then((response) => {
      dispatch(response.data);
    });
  }

  const setFiltersProvider = (event) => {
    console.log("event w PROVIDERZE=" + event.target.value)
    filters.set("partType", event.target.value)
  }

  useEffect(dispatchParts, []);

  return (
    <PartContext.Provider
      value={{
        parts: parts,
        dispatch: dispatchParts,
        filters: filters,
        setFilters: setFiltersProvider
      }}>

      {props.children}
    </PartContext.Provider>
  );
};

export default PartProvider;


