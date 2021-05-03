import '../../Css/index.css';
import React, { useContext } from 'react';
import * as partTypes from './PART_TYPES.jsx';
import { capitalizeFirstLetter } from '../../Page/PageElements/Utils.jsx'
import { PartContext } from "../api/PartsProvider.jsx";

const PartTypeSelect = (props) => {
    const partContext = useContext(PartContext);

    var types = partTypes.PART_LIST;
    return (
        <div className="searchBox">
            <label>Part type</label>
            <select className="searchBox" name="type" defaultValue={'common'} onChange={(e) => {props.handlePartChange(e); partContext.dispatch(null, e)}}>
                <option value="common">Any</option>
                {types.map((type, i) =>
                    <option key={i} id={type} value={type}>{capitalizeFirstLetter(type)}</option>
                )}
            </select>
        </div>
    );
}

const SpecBoxes = (props) => {
    console.log("partTypes part="+props.part)
    if (props.part) {
        return (
            
            props.fields.map((field, i) =>
                <div className="searchBox" key={i}>
                    <label>{capitalizeFirstLetter(field)}</label>
                    <br></br>
                    <input type="text" id={field} name={field} onChange={props.handleInputChange} maxLength="20" />
                </div>
            )
        );
    } else {
        var searchFields = partTypes.PART_GENERAL_FIELDS;
        return (
            searchFields.map((field, i) =>
                <div className="searchBox" key={i}>
                    <label>{capitalizeFirstLetter(field)}</label>
                    <br></br>
                    <input type="text" id={field} name={field} onChange={props.handleInputChange} maxLength="20" />
                </div>
            )
        );
    }
}

export default (props) => {
    const type = props.part;
    const spec = partTypes.findSpec(type);

    if (spec) {
        return (
            <React.Fragment>
                <PartTypeSelect handlePartChange={props.handlePartChange} partType={props.part}/>
                <SpecBoxes handleInputChange={props.handleInputChange} part={props.part} fields={spec.searchBoxes}/>
            </React.Fragment>
        );
    }
    return [];
}
