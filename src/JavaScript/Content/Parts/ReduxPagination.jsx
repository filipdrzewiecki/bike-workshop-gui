import React, { Component } from 'react';
import { fetchPartsWithFilters } from "../api/api-router.jsx"
import { connect } from 'react-redux';

//INFO: depracted, replaced with hooks and context
class FetchParts extends Component {

    mapParams(page) {
        var params = this.props.params;
        console.log("params pagination")
        console.log(params)
        if (page) {
            params.append('page', page);
        }
        return params;
    }

    isNotLastPage(number) {
        return number <= this.props.totalPages - 1 ? true : false;
    }

    renderPageNumber() {

        var list = [];
        var i = this.props.number != null ? this.props.number : 3
        console.log("number is ", i);
        if (i >= 1) {list.push(<button key={i-3} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i-1))}>&laquo;</button>) }

        if (i - 1 >= 1) { list.push(<button key={i-2} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i-2))}>{i-1}</button>) } 
        if (i >= 1) { list.push(<button key={i-1} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i-1))}>{i}</button>) }

        list.push(<button key={i} className="paginationButton active" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i))}>{i+1}</button>)
        if (this.isNotLastPage(i+1)) {list.push(<button key={i+1} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i+1))}>{i+2}</button>) }
        if (this.isNotLastPage(i+2)) { list.push(<button key={i+2} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i+2))}>{i+3}</button>) }

        if (i < 2  && this.isNotLastPage(i+3)) { list.push(<button key={i+3} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i+3))}>{i+4}</button>) } 
        if (i < 1 && this.isNotLastPage(i+4)) { list.push(<button key={i+4} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i+4))}>{i+5}</button>) }
            
        if (this.isNotLastPage(i+1)) {list.push(<button key={i+5} className="paginationButton" onClick={() => this.props.fetchPartsWithFilters(this.props.part, this.mapParams(i+1))}>&raquo;</button>)}

        return list;
    }

    render() {
        return (
            <div className="pagination">
                {this.renderPageNumber()}
            </div>
        )
    }
}

export default connect(null, { fetchPartsWithFilters })(FetchParts);