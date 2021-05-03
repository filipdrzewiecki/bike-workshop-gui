import React, { useContext } from 'react';
import { PartContext } from "../api/PartsProvider.jsx";
import { Loading } from '../../Page/PageElements/Utils.jsx'

function mapParams(page, params) {
    params.set('page', page);
    console.log("paramsy w paginacji")
    console.log(params.toString())
    return params;
}

function isNotLastPage(number, totalPages) {
    return number <= totalPages - 1 ? true : false;
}

const PaginationButton = (props) => {
    const partContext = useContext(PartContext);

    var index = props.index;
    var value = props.overrideDisplay ? props.overrideDisplay : index + 1;

    if (props.conditionRender) {
        if(!props.active) {
            return <button key={index} className="paginationButton" onClick={() => partContext.dispatch(mapParams(index, props.queryParams))}>{value}</button>
        } else {
            return <button key={index} className="paginationButton activePagination" onClick={() => partContext.dispatch(mapParams(index, props.queryParams))}>{index + 1} </button>
        }
    }
    return null;
}

export default (props) => {
    const partContext = useContext(PartContext);

    if (!partContext.parts) {
        return <Loading/>
    }

    var i = partContext.parts.number != null ? partContext.parts.number : 0;
    var totalPages = partContext.parts.totalPages;

    var queryParams = props.params;

    return (
        <div className="pagination">
            <PaginationButton index={i - 1} queryParams={queryParams} conditionRender={i >= 1} overrideDisplay={"\u00ab"} /> {/*LEFT ARROW*/}

            <PaginationButton index={i - 2} queryParams={queryParams} conditionRender={i >= 2} />

            <PaginationButton index={i - 1} queryParams={queryParams} conditionRender={i >= 1} />

            <PaginationButton index={i} queryParams={queryParams} conditionRender={true} active={true}/>

            <PaginationButton index={i + 1} queryParams={queryParams} conditionRender={isNotLastPage(i + 1, totalPages)} />

            <PaginationButton index={i + 2} queryParams={queryParams} conditionRender={isNotLastPage(i + 2, totalPages)} />

            <PaginationButton index={i + 3} queryParams={queryParams} conditionRender={isNotLastPage(i + 3, totalPages) && i <= 1} />

            <PaginationButton index={i + 4} queryParams={queryParams} conditionRender={isNotLastPage(i + 4, totalPages) && i <= 0} />

            <PaginationButton index={i + 1} queryParams={queryParams} conditionRender={isNotLastPage(i + 1, totalPages)} overrideDisplay={"\u00bb"}/> {/*RIGHT ARROW*/}
        </div>
    )
}