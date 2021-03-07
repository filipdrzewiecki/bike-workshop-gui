import '../../../Css/index.css';
import './BicycleList.css'
import React, { Component } from 'react';
import Page from '../../../Page/PageElements/menu.jsx';
import { Link } from "react-router-dom";
import { getBicycles } from "../../api/api-router.jsx"
import { connect } from 'react-redux';
import { MapType } from '../fetchBicycle.jsx';
import { getUserName } from '../../../Page/Security/authHeader';
import BicyclePlaceholderIcon from "../../../../resources/icon/bicycle-icon.png";

class Bicycles extends Component {

  componentDidMount() {
    this.props.getBicycles();
  }

  renderCreateNew() {
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

  renderBicycleList(bicycles) {
    console.log(bicycles)
    return (
      <div className="card_container">
        {this.renderCreateNew()}
        {bicycles.map((bike) => (
          <div className="bicycle_card" key={bike.id}>
            <Link to={`/${getUserName()}/bicycles/${bike.name}`} key={bike.id}>
              <div className="bicycle_photo_container">
                <img src={BicyclePlaceholderIcon} alt="BicyclePlaceholderIcon"></img>
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

  render() {
    return (
      <Page
        isBackButton='false'
        paragraphs={[
          <div> {this.renderBicycleList(this.props.bicycles)}</div>,
        ]}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { bicycles: Object.values(state.bicycles) }
}

export default connect(mapStateToProps, { getBicycles })(Bicycles);