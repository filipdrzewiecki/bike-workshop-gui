import '../../Css/index.css';
import './fetchParts.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { fetchParts, fetchPartsWithFilters } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import IconGoBack from '../../../resources/icon/go-back.png';
import SearchBoxes from './PartSpecializationSearchBoxes.jsx';
import PartsTable from './PartSpecializationTable.jsx';
import { capitalizeFirstLetter } from '../../Page/PageElements/Utils.jsx'
class FetchParts extends Component {

    constructor(props) {
        super(props);
        this.state = { brand: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchPartsWithFilters(this.props.match.params.part, this.state.brand);
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({ brand: event.target.value });
    }

    renderList() {
        if (Array.isArray(this.props.parts) && this.props.parts.length) {
            return <PartsTable type={this.props.match.params.part} parts={this.props.parts} />;
        }
        return []
    }

    render() {
        return (
            <div className="mainPage">

                <div className="page-top">
                    <div className="page-title-container">
                        <div className="page-title">
                            <div className="primary">{capitalizeFirstLetter(this.props.match.params.part)}</div>
                        </div>
                        <div className="go-back-button">
                            <Link to={`/parts`}><img src={IconGoBack} alt="GoBack" ></img></Link>
                        </div>
                    </div>
                </div>

                <div className="page-mid">
                        <div className="searchSection">
                            <div className="searchBoxes">
                                <SearchBoxes type = {this.props.match.params.part} handleChange={this.handleChange.bind(this)} />
                            </div>
                            <div className="search-button-container">
                                <button onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.state.brand)} className="search-button">SZUKAJ</button>
                            </div>
                        </div>
                </div>

                <div className="page-bottom">
                    <div>
                        <div className="yelloLink"><Link to={`/parts/${this.props.match.params.part}/new`} >NOWY + </Link></div>
                        {this.renderList()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const parts = state.parts.parts;
    return { parts: parts }
}

export default connect(mapStateToProps, { fetchParts, fetchPartsWithFilters })(FetchParts);