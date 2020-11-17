import './menuFilterable.css';
import '../../Css/index.css';
import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';
import { Link } from "react-router-dom";

export default class MenuFilterable extends React.Component {

    render() {
        return (
            <div className="mainPage">
                <div className="page-top">
                    <div className="page-title-container">
                        <div className="page-title">
                            <div className="primary">{this.capitalizeFirstLetter(this.props.partName)}</div>
                        </div>
                        <div className="go-back-button">
                            <Link to={`/parts`}><img src={IconGoBack} alt="GoBack" ></img></Link>
                        </div>
                    </div>
                </div>


                <div className="page-mid">
                    <form onSubmit={this.handleSubmit}>
                        <div className="searchSection">
                            <div className="searchBoxes">
                                {this.renderSearchBoxes()}
                            </div>
                            <div className="search-button-container">
                                <button onClick={() => this.props.fetchPartsWithFilters(this.props.partName, this.props.brand)} className="search-button">SZUKAJ</button>
                            </div>
                        </div>
                    </form>

                </div>

                <div className="page-bottom">
                    <div>
                        <div className="yelloLink"><Link to={`/parts/${this.props.partName}/new`} >NOWY + </Link></div>
                        {this.renderList()}
                    </div>

                </div>
            </div>
        );
    }
}