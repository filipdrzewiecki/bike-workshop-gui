import './partDetails.css';
import '../../Css/dropdownMenu.css';
import React from 'react';

export default class PartDetails extends React.Component {

    render() {
        return (
            <div>
                <div className="pageContentTitle">
                    {this.props.sectionTitle}
                </div>
                <div className="pageContent">
                    <div className="contentNames">
                        {this.props.fieldNames.map((name) => <div>{name}:</div>)}
                    </div>
                    <div className="contentValues">
                        {this.props.fieldValues.map((value) => <div>{value}</div>)}
                    </div>
                </div>
            </div>
        );
    }
}