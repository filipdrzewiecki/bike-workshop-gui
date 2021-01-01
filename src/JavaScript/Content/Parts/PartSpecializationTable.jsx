import '../../Css/index.css';
import React, { Component } from 'react';
import * as partTypes from './PART_TYPES.jsx';
import { Link } from "react-router-dom";

export default class PartsTable extends Component {

    renderContentTable(parts, fields) {
        return (
            <React.Fragment>
                {this.renderColumnNames(fields)}
                {this.renderColumns(parts, fields)}
            </React.Fragment>
        )
    }

    renderColumns(parts, fields) {
        return (
            <React.Fragment>
                {parts.map((part, i) => (
                    <Link to={`/parts/${part.product}/${part.productId}`} key={part.id}>
                        <div className="bar" key={i}>
                            {fields.map((field, i) => (
                                <div className="cell" key={i}> {part[field]} </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </React.Fragment>
        );
    }

    renderColumnNames(fields) {
        return (
            <div className="bar-main">
                {fields.map((field, i) => (
                    <div className="cell" key={i}> {field.toUpperCase()} </div>
                ))}
            </div>
        );

    }

    render() {
        const type = this.props.type;
        const parts = this.props.parts;
        const spec = partTypes.findSpec(type);

        if (spec) {
            return this.renderContentTable(parts, spec.fields);
        }
        return [];
    }
}