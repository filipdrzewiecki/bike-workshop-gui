import '../../Css/index.css';
import React, { Component } from 'react';
import * as partTypes from './PART_TYPES.jsx';
import { Link } from "react-router-dom";

export default class PartsTable extends Component {

    renderContentTable(parts, columns) {
        return (
            <React.Fragment>
                {this.renderColumnNames(columns)}
                {this.renderColumns(parts, columns)}
            </React.Fragment>
        )
    }

    renderColumns(parts, columns) {
        return (
            <React.Fragment>
                {parts.map((part, i) => (
                    <Link to={`/parts/${part.product}/${part.productId}`} key={part.id}>
                        <div className="bar" key={i}>
                            {columns.map((column, i) => (
                                <div className="cell" key={i}> {part[column]} </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </React.Fragment>
        );
    }

    renderColumnNames(columns) {
        return (
            <div className="bar-main">
                {columns.map((column, i) => (
                    <div className="cell" key={i}> {column.toUpperCase()} </div>
                ))}
            </div>
        );

    }

    render() {
        const type = this.props.type;
        const parts = this.props.parts;
        const spec = partTypes.findSpec(type);


        if (spec) {
            return this.renderContentTable(parts, spec.columns);
        }
        return [];
    }
}