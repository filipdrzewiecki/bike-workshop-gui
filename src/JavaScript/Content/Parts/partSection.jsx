import './partSection.css';
import React from 'react';

export default class PartDetails extends React.Component {

    render() {
        return (
            <div>
                <div className="part-section-title">
                    {this.props.sectionTitle}
                </div>
                <div className="part-details">
                    {this.props.fields.map((field, i) =>
                        <div className="contentField" key={i}>
                            <div className="fieldName">{field.props.name}:  </div>
                            <div className="fieldValue">{field.props.value}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}