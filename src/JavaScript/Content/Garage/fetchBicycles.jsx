import '../../Css/index.css';
import React, { Component } from 'react';
import Page from '../../Page/PageElements/menu.jsx';
import { Link } from "react-router-dom";
import { getBicycles } from "../api/api-router.jsx"
import { connect } from 'react-redux';
import { MapType } from './fetchBicycle.jsx';
import { getUserName } from '../../Page/Security/authHeader';

class Bicycles extends Component {

  componentDidMount() {
    this.props.getBicycles();
  }

  renderBicycleList(bicycles) {
    console.log(bicycles)
    return (
      <div>
        {bicycles.map((bike) => (
          <Link to={`/${getUserName()}/garage/${bike.name}`} key={bike.id}>
            <div className="bicycle" key={bike.id}>
              <h2>{bike.name}</h2>
              <div>{bike.brand} {bike.model}</div>
              <div><MapType type={bike.type} />  {bike.weight} kg </div>
            </div>
          </Link>
        ))}
      </div>
    )
  };

  render() {
    return (
      <Page
        isBackButton='false'
        title="Your bicycles"
        paragraphs={[
          <Link to={`/${getUserName()}/garage/new`} ><div className="bicycle"><h2> Create new bicycle + </h2></div></Link>,
          <div> {this.renderBicycleList(this.props.bicycles) }</div>,
        ]}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { bicycles: Object.values(state.bicycles) }
}

export default connect(mapStateToProps, { getBicycles })(Bicycles);