import '../../../Css/index.css';
import './partsList.css';
import React, { useContext } from 'react';
import SearchBoxes from '../PartSpecializationSearch.jsx';
import PartsTable from '../PartSpecializationTable.jsx';
import { getQueryParams, capitalizeFirstLetter, Loading } from '../../../Page/PageElements/Utils.jsx'
import Pagination from '../Pagination.jsx'
import PartProvider from '../../api/PartsProvider.jsx';
import { PartContext } from "../../api/PartsProvider.jsx";
import * as partTypes from '../PART_TYPES.jsx';
import { Fragment } from 'react';

const Filters = new Map();

function handleInputChange(event, partType) {
    const searchBoxes = partTypes.findSpec(partType).searchBoxes;
    for (var box of searchBoxes) {
        if (event.target.name === box) {
            Filters.set(box, event.target.value)
            console.log("box="+box+ " value="+event.target.value)
        }
    }
}

function handlePartChange(event) {
    console.log("ustawiam czesc="+event.target.value)
    Filters.set("partType", event.target.value)
    
}

const FetchParts = () => {
    const partContext = useContext(PartContext);

    if (!partContext.parts) {
        return <Loading/>
    }
    
    const parts = partContext.parts;
    const currentPage = partContext.parts.number;
    Filters.set('page', currentPage)

    var part = Filters.get("partType");
    var partType = part != null ? part : 'common'
    console.log("isTypeSet")
    console.log(partType)

    return (
        <Fragment>
            <div className="page-search">
                <div className="searchSection">
                    <div className="searchBoxes">
                        <button onClick={() => partContext.dispatch(Filters)} className="search-button">SEARCH</button>
                        <SearchBoxes part={partType} type={partType} handleInputChange={(e) => handleInputChange(e, partType)} handlePartChange={(e) => handlePartChange(e)} filters={Filters}/>
                    </div>
                </div>
            </div>

            <div className="mainPage_88">
                <div className="page-top">
                    <div className="page-title-container">
                        <div className="page-title">
                            <div className="primary">{capitalizeFirstLetter(partType === 'common' ? 'All parts' : partType)}</div>
                        </div>
                    </div>
                </div>

                <div className="page-bottom">
                    <div>
                        {/* <div className="yelloLink"><Link to={`/parts/${partType}/new`}> NEW + </Link></div> */}
                        <PartsTable type={partType} parts={parts.content} />
                    </div>
                </div>
                <div className="page-pagination">
                    <Pagination params={getQueryParams(Filters)} />
                </div>
            </div>
        </Fragment>
    );
}

export default () => { return <PartProvider isPersonal={true}><FetchParts /></PartProvider> }