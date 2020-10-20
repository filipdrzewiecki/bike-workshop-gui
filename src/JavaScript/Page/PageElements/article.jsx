import './article.css';
import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';
import { Link } from "react-router-dom";

RenderGoBack.defaultProps = {
    isBackButton: true
};

function RenderGoBack(props) {
    if (props.isBackButton === true) {
        return (
            <div className="go-back-button">
                <Link to={props.backButtonLink}><img src={IconGoBack} alt="GoBack" ></img></Link>
            </div>
        );
    }
    return null;
}

function RenderTitle(props) {
    if (props.secondaryTitle) {
        return (
            <div className="empty-container">
                <div className="page-title">
                    <div className="primary">{props.title}</div>
                    <div className="secondary">{props.secondaryTitle}</div>
                </div>
            </div>
        );
    }
    return (
        <div className="empty-container">
            <div className="page-title">
                <p className="primary-basic">{props.title}</p>
            </div>
        </div>
    );
}


export default class Page extends React.Component {

    render() {
        return (
            <div className="page">
                <div className="page-title-container">
                    <RenderTitle title={this.props.title} secondaryTitle={this.props.secondaryTitle} />
                    <RenderGoBack isBackButton={this.props.isBackButton} backButtonLink={this.props.backButtonLink} />
                </div>
                <div className="pageContentMenu">
                    {this.props.paragraphs.map((paragraph, i) => <div key={i} className="section">{paragraph}</div>)}
                </div>
            </div>
        );
    }
}