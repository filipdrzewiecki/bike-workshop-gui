import '../../../Css/index.css';
import React, { useContext } from 'react';
import BicycleDetails from '../BicycleDetails.jsx';
import PersonalBicycleProvider from '../../api/PersonalBicycleProvider.jsx';
import { PersonalBicycleContext } from "../../api/PersonalBicycleProvider.jsx";
import { Loading } from '../../../Page/PageElements/Utils.jsx'

const Bicycle = () => {
  const context = useContext(PersonalBicycleContext);

  if (!context.bicycle) { return <Loading /> }

  const bicycle = context.bicycle.payload;

  return (
    <BicycleDetails
      title={bicycle.name}
      bicycle={bicycle}
      secondaryTitle={<div>{bicycle.brand} {bicycle.model} {bicycle.year}</div>}
    />
  );
}

export default () => { return <PersonalBicycleProvider><Bicycle /></PersonalBicycleProvider> }
