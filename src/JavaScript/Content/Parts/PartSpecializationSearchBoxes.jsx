import '../../Css/index.css';
import React, { Component } from 'react';
import * as partTypes from './PART_TYPES.jsx';

export default class SearchBoxes extends Component {

    renderFrameSearchBoxes() {
        return (
            <React.Fragment>
                <div className="searchBox">
                    <label>Marka:</label>
                    <br></br>
                    <input type="text" id="brand" name="brand" onChange={this.props.handleChange} />
                </div>
            </React.Fragment>
        );
    }

    renderForkSearchBoxes() {
        return (
            <React.Fragment>
                <div className="searchBox">
                    <label>Skok:</label>
                    <br></br>
                    <input type="text" id="brand" name="brand" onChange={this.props.handleChange} />
                </div>
            </React.Fragment>
        );
    }

  render() {
      const type = this.props.type;
      switch (type) {
        case partTypes.FRAME:
            return this.renderFrameSearchBoxes();
        case partTypes.FORK:
            return this.renderForkSearchBoxes();
        default:
            return [];
    }
  }
}