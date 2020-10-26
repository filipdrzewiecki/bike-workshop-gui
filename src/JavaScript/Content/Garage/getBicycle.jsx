import '../../Css/index.css';
import React, { Component } from 'react';
import BicycleDetails from '../../Page/PageElements/bicycleDetails.jsx';
import { getBicycle } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import { getUserName } from '../../Page/Security/authHeader';

export function MapType(props) {
  if (props.type === "MOUNTAIN_BIKE") {
    return "Rower górski";
  }
  if (props.type === "ROAD_BIKE") {
    return "Rower szosowy";
  }
  return "Nieznany";
}

class Bicycle extends Component {

  componentDidMount() {
    this.props.getBicycle(this.props.match.params.bike);
  }

  renderBicycle() {
    return (
      <BicycleDetails
        backButtonLink={`/${getUserName()}/garage`}
        title={this.props.bicycle.name}
        bicycle={this.props.bicycle}
        secondaryTitle={<div>{this.props.bicycle.brand} {this.props.bicycle.model} {this.props.bicycle.year}</div>}
      />
    );
  }

  render() {
    if (!this.props.bicycle) {
      return <div>Loading...</div>
    }
    return this.renderBicycle();
  }
}

const mapStateToProps = (state, ownProps) => {
  const bicycles = Object.values(state.bicycles);
  return { bicycle: bicycles.find(bike => bike.name === ownProps.match.params.bike) }
}

export default connect(mapStateToProps, { getBicycle })(Bicycle);