import './Utils.css';
import { CircleSpinner } from "react-spinners-kit";
import React from 'react';

export function capitalizeFirstLetter(text) {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

export function mapBicycleEnum(type) {
  if (type === "MOUNTAIN_BIKE") {
    return "Mountain bike";
  }
  if (type === "ROAD_BIKE") {
    return "Road bike";
  }
  return "Nieznany";
}

export function getQueryParams(filters) {
  var params = new URLSearchParams();

  for (var key of filters.keys()) {
      var value = filters.get(key);
      if (value) {
          params.append(key, value)
      }
  }
  return params;
}

export const Loading = () => {
  return <div className="loading"><CircleSpinner size={30} color="grey" loading={true} /></div>
}