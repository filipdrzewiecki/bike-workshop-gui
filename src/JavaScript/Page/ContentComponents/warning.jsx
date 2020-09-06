import '../../Css/content.css';
import React from 'react';

export default class WarningBox extends React.Component {
    render() {
        return (
            <div className="warning-yellow">
                {this.props.warningText}
            </div>
        );
    }
}