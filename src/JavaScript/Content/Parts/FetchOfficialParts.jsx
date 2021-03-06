import '../../Css/index.css';
import './fetchParts.css';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import SearchBoxes from './PartSpecializationSearch.jsx';
import PartsTable from './PartSpecializationTable.jsx';
import { capitalizeFirstLetter } from '../../Page/PageElements/Utils.jsx'
import Pagination from './Pagination.jsx'
import PartProvider from '../api/PartsProvider.jsx';
import { PartContext } from "../api/PartsProvider.jsx";
import * as partTypes from './PART_TYPES.jsx';
import { Fragment } from 'react';

const Filters = new Map();

const RenderList = (props) => {
    const partType = useParams().part;

    const parts = props.payload.content;

    if (Array.isArray(parts) && parts.length) {
        return <PartsTable type={partType} parts={parts} />;
    }
    return []
}

function handleInputChange(event, partType) {
    const searchBoxes = partTypes.findSpec(partType).searchBoxes;

    for (var box of searchBoxes) {
        if (event.target.name === box) {
            Filters.set(box, event.target.value)
        }
    }
}

function getQueryParams(filters) {
    var params = new URLSearchParams();

    for (var key of filters.keys()) {
        var value = filters.get(key);
        if (value) {
            params.append(key, value)
        }
    }
    return params;
}

const FetchParts = () => {
    const partContext = useContext(PartContext);

    const partType = useParams().part;

    const currentPage = partContext.parts ? partContext.parts.payload.number : 0;

    const payload = partContext.parts ? partContext.parts.payload : {};

    Filters.set('page', currentPage)

    return (
        <Fragment>
            <div className="page-search">
                <div className="searchSection">
                    <div className="searchBoxes">
                    <button onClick={() => partContext.dispatch(getQueryParams(Filters))} className="search-button">SEARCH</button>
                        <SearchBoxes type={partType} handleInputChange={(e) => handleInputChange(e, partType)} />
                    </div>
                </div>
            </div>

            <div className="mainPage">
                <div className="page-top">
                    <div className="page-title-container">
                        <div className="page-title">
                            <div className="primary">{capitalizeFirstLetter(partType)}</div>
                        </div>
                    </div>
                </div>

                <div className="page-bottom">
                    <div>
                        <div className="yelloLink"><Link to={`/parts/${partType}/new`}> NEW + </Link></div>
                        <RenderList payload={payload} />
                    </div>
                </div>
                <div className="page-pagination">
                    <Pagination params={getQueryParams(Filters)} />
                </div>
            </div>
        </Fragment>
    );
}

export default () => { return <PartProvider><FetchParts /></PartProvider> }