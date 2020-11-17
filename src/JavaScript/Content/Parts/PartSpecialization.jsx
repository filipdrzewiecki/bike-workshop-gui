import '../../Css/index.css';
import React, { Component } from 'react';
import * as partTypes from './PART_TYPES.jsx';

export default class PartSpecialization extends Component {

    constructor(props) {
        super(props);
        this.state = { brand: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    mapPartSearchBoxes(type) {
        switch (type) {
            case partTypes.FRAME:
                return this.renderSearchBoxes();
            default:
                return [];
        }
    }


    
    handleChange(event) {
        event.preventDefault()
        this.setState({ brand: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault()

    }

    renderSearchBoxes() {
        return (
            <React.Fragment>
                <div className="searchBox">
                    <label>Marka:</label>
                    <br></br>
                    <input onSubmit={this.props.handleSubmit(this.onSubmit)} type="text" id="brand" name="brand" value={this.state.brand} onChange={this.handleChange} />
                </div>
            </React.Fragment>
        );
    
    }

  render() {
    return (
        this.mapPartSearchBoxes(this.props.type)
    );
  }

}