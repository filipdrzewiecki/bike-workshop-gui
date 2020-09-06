import '../../Css/index.css';

import React from 'react';

function RenderTitle(props) {
    if (props.title) {
        return (
            <div className="section-title">
                {props.title}
            </div>
        );
    }
    return null;
}

export default class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <RenderTitle title={this.props.title} />
                {this.props.paragraphs.map((paragraph) => <div className="text-field">{paragraph}</div>)}
            </div>
        );
    }

}