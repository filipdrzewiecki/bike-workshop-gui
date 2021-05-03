import '../../../Css/index.css';
import './BicycleList.css'
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { getUserName } from '../../../Page/Security/authHeader';
import BicyclePlaceholderIcon from "../../../../resources/icon/bicycle-icon.png";
import PersonalBicyclesProvider from '../../api/PersonalBicyclesProvider.jsx';
import { PersonalBicyclesContext } from "../../api/PersonalBicyclesProvider.jsx";
import { mapBicycleEnum, Loading } from '../../../Page/PageElements/Utils.jsx'

const CreateNew = () => {
  return (
    <div className="bicycle_card" >
      <Link to={`/${getUserName()}/bicycles/new`}>
        <div className="bicycle_photo_container">
          <img src={BicyclePlaceholderIcon} alt="BicyclePlaceholderIcon"></img>
        </div>
        <div className="bicycle_data">
          <h2>CREATE NEW +</h2>
        </div>
      </Link>
    </div>
  )
}

const Bicycles = (props) => {
  return (
    <div className="card_container">
      <CreateNew />
      {props.bicycles.map((bike) => (
        <div className="bicycle_card" key={bike.id}>
          <Link to={`/${getUserName()}/bicycles/${bike.name}`} key={bike.id}>
            <div className="bicycle_photo_container">
              <img src={`http://localhost:8080/image/2`} alt="BicyclePlaceholderIcon"></img>
            </div>
            <div className="bicycle_data">
              <h2>{bike.name}</h2>
              <div>{bike.brand} {bike.model}</div>
              <div>{mapBicycleEnum(bike.type)} {bike.weight} kg </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
};

const PersonalBicyclesList = () => {
  const context = useContext(PersonalBicyclesContext);
  if (!context.bicycles) {
    return <Loading />
  }
  const bicycles = context.bicycles.payload;
  return (
      <Bicycles bicycles={bicycles} />
  );
}

export default () => { return <PersonalBicyclesProvider><PersonalBicyclesList /></PersonalBicyclesProvider> }