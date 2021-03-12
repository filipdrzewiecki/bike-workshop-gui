import '../../../Css/index.css';
import './BicycleList.css'
import React, { useContext } from 'react';
import Page from '../../../Page/PageElements/menu.jsx';
import { Link } from "react-router-dom";
import { MapType } from './Bicycle.jsx';
import { getUserName } from '../../../Page/Security/authHeader';
import BicyclePlaceholderIcon from "../../../../resources/icon/bicycle-icon.png";
import PersonalBicyclesProvider from '../../api/PersonalBicyclesProvider.jsx';
import { PersonalBicyclesContext } from "../../api/PersonalBicyclesProvider.jsx";

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
              <div><MapType type={bike.type} />  {bike.weight} kg </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
};

const PersonalBicyclesList = () => {
  const context = useContext(PersonalBicyclesContext);
  const bicycles = context.bicycles ? context.bicycles.payload : [];
  return (
    <Page
      isBackButton='false'
      paragraphs={[
        <div>
          <Bicycles bicycles={bicycles} />
        </div>,
      ]}
    />
  );
}

export default () => { return <PersonalBicyclesProvider><PersonalBicyclesList /></PersonalBicyclesProvider> }