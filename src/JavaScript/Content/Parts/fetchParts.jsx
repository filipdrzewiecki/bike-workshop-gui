import '../../Css/index.css';
import './fetchParts.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { fetchPartsWithFilters } from "../apis/api-router.jsx"
import { connect } from 'react-redux';
import IconGoBack from '../../../resources/icon/go-back.png';
import SearchBoxes from './PartSpecializationSearchBoxes.jsx';
import PartsTable from './PartSpecializationTable.jsx';
import { capitalizeFirstLetter } from '../../Page/PageElements/Utils.jsx'
import Pagination from './pagination.jsx'
import { renderParams } from './PartSpecializationParams';

class FetchParts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            model: "",
            year: "",
            currentPage: this.props.pageable.number != null ? this.props.pageable.number : 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log("evemt")
        console.log(event.target)
        if(event.target.name === 'brand') {
            this.setState({ brand: event.target.value});
        }
        if(event.target.name === 'model') {
            this.setState({ model: event.target.value});
        }
        if(event.target.name === 'year') {
            this.setState({ year: event.target.value});
        }
    }

    mapParams() {
        return renderParams(this.props.match.params.part, this.state);
    }

    componentDidMount() {
        this.props.fetchPartsWithFilters(this.props.match.params.part, this.props.location.search);
    }

    renderList() {
        if (Array.isArray(this.props.parts) && this.props.parts.length) {
            return <PartsTable type={this.props.match.params.part} parts={this.props.parts} />;
        }
        return []
    }

    renderPages() {
        return <Pagination 
        number={this.props.pageable.number} 
        totalPages={this.props.pageable.totalPages} 
        part={this.props.match.params.part} 
        filters={this.state} 
        params={this.mapParams()}
        />
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
                            <SearchBoxes type={this.props.match.params.part} handleInputChange={this.handleInputChange}/>
                        </div>
                        <div className="search-button-container">
                            <button onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(this.state.currentPage))} className="search-button">SZUKAJ</button>
                        </div>

                    </div>
                </div>

                <div className="page-bottom">
                    <div>
                        <div className="yelloLink"><Link to={`/parts/${this.props.match.params.part}/new`} >NOWY + </Link></div>
                        {this.renderList()}
                    </div>
                </div>
                <div className="page-pagination">
                    {this.renderPages()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.parts.payload) {
        const payload = state.parts.payload;
        return { parts: payload.content, pageable: payload }
    }
    return { parts: [], pageable: {}}
}

export default connect(mapStateToProps, { fetchPartsWithFilters })(FetchParts);