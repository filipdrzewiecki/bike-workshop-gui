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
        this.state = {
            brand: "",
            currentPage: this.props.pageable.number != null ? this.props.pageable.number : 0
        };
        this.pageLimit=30;
        this.totalRecords=1;
        this.totalPages=5;
        this.handleChange = this.handleChange.bind(this);

    }

    mapParams(page) {
        var filters = new URLSearchParams();
        if (page) {
            filters.append('page', page);
        }
        if (this.state.brand) {
            filters.append('brand', this.state.brand);
        }
        return filters;
    }

    componentDidMount() {
        this.props.fetchPartsWithFilters(this.props.match.params.part, this.props.location.search);
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

    renderPages() {
        return (
            <div className="pagination">
                {this.renderPageNumber()}
            </div>
        )
    }

    isNotLastPage(number) {
        return number <= this.props.pageable.totalPages - 1 ? true : false;
    }

    renderPageNumber() {
        var list = [];
        var i = this.props.pageable.number != null ? this.props.pageable.number : 3;
        if (i >= 1) {list.push(<button key={i-3} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i-1))}>&laquo;</button>) }

        if (i - 1 >= 1) { list.push(<button key={i-2} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i-2))}>{i-1}</button>) } 
        if (i >= 1) { list.push(<button key={i-1} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i-1))}>{i}</button>) }

        list.push(<button key={i} className="paginationButton active" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i))}>{i+1}</button>)
        if (this.isNotLastPage(i+1)) {list.push(<button key={i+1} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i+1))}>{i+2}</button>) }
        if (this.isNotLastPage(i+2)) { list.push(<button key={i+2} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i+2))}>{i+3}</button>) }

        if (i < 2  && this.isNotLastPage(i+3)) { list.push(<button key={i+3} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i+3))}>{i+4}</button>) } 
        if (i < 1 && this.isNotLastPage(i+4)) { list.push(<button key={i+4} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i+4))}>{i+5}</button>) }
            
        if (this.isNotLastPage(i+1)) {list.push(<button key={i+5} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.match.params.part, this.mapParams(i+1))}>&raquo;</button>)}

        return list;
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
                            <SearchBoxes type={this.props.match.params.part} handleChange={this.handleChange.bind(this)} />
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

export default connect(mapStateToProps, { fetchParts, fetchPartsWithFilters })(FetchParts);