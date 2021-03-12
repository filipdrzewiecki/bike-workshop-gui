import './Utils.css';
import { CircleSpinner } from "react-spinners-kit";
import React from 'react';

export function capitalizeFirstLetter(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
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

export const Loading = () => {
    return <div className="loading"><CircleSpinner size={30} color="grey" loading={true} /></div>
}