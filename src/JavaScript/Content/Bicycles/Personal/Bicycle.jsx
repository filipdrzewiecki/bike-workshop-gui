import '../../../Css/index.css';
import React, { useContext } from 'react';
import BicycleDetails from '../bicycleDetails.jsx';
import PersonalBicycleProvider from '../../api/PersonalBicycleProvider.jsx';
import { PersonalBicycleContext } from "../../api/PersonalBicycleProvider.jsx";

export function MapType(props) {
  if (props.type === "MOUNTAIN_BIKE") {
    return "Mountain bike";
  }
  if (props.type === "ROAD_BIKE") {
    return "Road bike";
  }
  return "Nieznany";
}

const Bicycle = () => {
  const context = useContext(PersonalBicycleContext);
  const bicycle = context.bicycle ? context.bicycle.payload : {};
  console.log("rower")
  console.log(context)

  if (!bicycle) {
    return <div className="fetchBicycle">Loading...</div>
  }
  return (
    <BicycleDetails
      title={bicycle.name}
      bicycle={bicycle}
      secondaryTitle={<div>{bicycle.brand} {bicycle.model} {bicycle.year}</div>}
    />
  );
}

export default () => { return <PersonalBicycleProvider><Bicycle /></PersonalBicycleProvider> }
