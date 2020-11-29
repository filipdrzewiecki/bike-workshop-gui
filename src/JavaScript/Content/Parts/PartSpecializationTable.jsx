import '../../Css/index.css';
import React, { Component } from 'react';
import * as partTypes from './PART_TYPES.jsx';
import { Link } from "react-router-dom";

export default class PartsTable extends Component {

    renderFrameTable(parts) {
        return (
            <div>
                <div className="bar-main">
                    <div className="cell"> Marka </div>
                    <div className="cell"> Model </div>
                    <div className="cell"> Rok </div>
                    <div className="cell"> Rozmiar </div>
                </div>
                {parts.map((part) => (
                    <Link to={`/parts/${part.product}/${part.productId}`} key={part.id}>
                        <div className="bar">
                            <div className="cell"> {part.brand} </div>
                            <div className="cell"> {part.model} </div>
                            <div className="cell"> {part.year} </div>
                            <div className="cell"> {part.size} </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }

    renderForkTable(parts) {
        return (
            <div>
                <div className="bar-main">
                    <div className="cell"> Marka </div>
                    <div className="cell"> Model </div>
                    <div className="cell"> Rok </div>
                    <div className="cell"> Skok </div>
                    <div className="cell"> Koło </div>
                </div>
                {parts.map((part) => (
                    <Link to={`/parts/${part.product}/${part.productId}`} key={part.id}>
                        <div className="bar">
                            <div className="cell"> {part.brand} </div>
                            <div className="cell"> {part.model} </div>
                            <div className="cell"> {part.year} </div>
                            <div className="cell"> {part.travel} </div>
                            <div className="cell"> {part.wheel} </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }

    render() {
        const type = this.props.type;
        const parts = this.props.parts;

        switch (type) {
            case partTypes.FRAME:
                return this.renderFrameTable(parts);
            case partTypes.FORK:
                return this.renderForkTable(parts);
            default:
                return [];
        }
    }
}