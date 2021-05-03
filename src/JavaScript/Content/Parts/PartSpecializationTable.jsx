import '../../Css/index.css';
import React  from 'react';
import * as partTypes from './PART_TYPES.jsx';
import { Link } from "react-router-dom";


function renderColumns(parts, columns) {
    return (
        <React.Fragment>
            {parts.map((part) => (
                <Link to={`/parts/${part.product}/${part.productId}`}>
                    <div className="bar">
                        {columns.map((column) => (
                            <div className="cell" > {part[column]} </div>
                        ))}
                    </div>
                </Link>
            ) )}
        </React.Fragment>
    );
}

function renderColumnNames(columns) {
    return (
        <div className="bar-main">
            {columns.map((column) => (
                <div className="cell" > {column.toUpperCase()} </div>
            ))}
        </div>
    );

}

export default (props) => {
    const type = props.type;
    const parts = props.parts;
    console.log("type in XYZ="+type)
    const spec = partTypes.findSpec(type);
    var columns = spec.columns;

    if (spec) {
        return (
            <React.Fragment>
                {renderColumnNames(columns)}
                {renderColumns(parts, columns)}
            </React.Fragment>
        );
    }
    return [];
}
