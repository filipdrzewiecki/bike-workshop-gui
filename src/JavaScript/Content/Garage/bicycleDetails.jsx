import '../../Css/index.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export function MapType (props) {
    if (props.type === "MOUNTAIN_BIKE") {
      return "Rower górski";
    }
    if (props.type === "ROAD_BIKE") {
      return "Rower szosowy";
    }
    return "Nieznany";
  }

class BicycleDetails extends Component {
    render() {
        return (
            <div>
                <div>Typ: <MapType type = {this.props.bicycle.type}/></div>
                <div>Waga: {this.props.bicycle.predefinedWeight}</div>
                <div>Rama: </div>
                <div>Widelec: </div>
                <div className="bicycle-actions">
                    <Link className="button" to={`/garage/${this.props.bicycle.id}/edit`}>Edytuj</Link>
                    <Link className="button" to={`/garage/${this.props.bicycle.id}/delete`}>Usuń</Link>
                </div>
            </div>

        );
    }
}

export default BicycleDetails;