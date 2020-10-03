import '../../Css/index.css';
import React, { Component } from 'react';
import BicycleDetails from '../../Page/PageElements/bicycleDetails.jsx';
import { getBicycle } from "../apis/api-router.jsx"
import { connect } from 'react-redux';

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
    this.props.getBicycle(this.props.match.params.id);
  }

  renderBicycle() {
    return (
      <BicycleDetails
        backButtonLink='/garage'
        title={this.props.bicycle.name}
        bicycle={this.props.bicycle}
        secondaryTitle={<div>{this.props.bicycle.brand} {this.props.bicycle.model} {this.props.bicycle.year}</div>}
        content={
          <div>
            <div>Typ: <MapType type={this.props.bicycle.type} /></div>
            <div>Waga: {this.props.bicycle.predefinedWeight}</div>
            <div>Rama: </div>
            <div>Widelec: </div>
          </div>
        }
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
  return { bicycle: state.bicycles[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getBicycle })(Bicycle);