import '../../Css/index.css';
import React, { Component } from 'react';
import * as partTypes from './PART_TYPES.jsx';

export function renderParams(filters) {
    var params = new URLSearchParams();
    
    if (filters.currentPage) {
        params.append('page', filters.currentPage);
    }

    for (var key in filters) {
        var value = filters[key];
        if (filters.hasOwnProperty(key) && value && partTypes.FIELDS.includes(key)) {
            params.append(key, value)
        }
    }
    return params;
}

export default class SearchBoxes extends Component {

    mapSearchBoxes(fields) {
        return (
            <React.Fragment>
                {fields.map((field, i) =>
                    <div className="searchBox" key={i}>
                        <label>{field}</label>
                        <br></br>
                        <input type="text" id={field} name={field} onChange={this.props.handleInputChange} maxLength="20"/>
                    </div>
                )}
            </React.Fragment>
        );
    }

    render() {
        const type = this.props.type;
        const spec = partTypes.findSpec(type);

        if (spec) {
            return this.mapSearchBoxes(spec.searchBoxes);
        }
        return [];
    }
}