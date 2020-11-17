import './menu.css';
import '../../Css/index.css';
import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';
import { Link } from "react-router-dom";

export default class Menu extends React.Component {

    renderGoBack(backButtonLink) {
        if (backButtonLink) {
            return (
                <div className="go-back-button">
                    <Link to={backButtonLink}><img src={IconGoBack} alt="GoBack" ></img></Link>
                </div>
            );
        }
        return null;
    }
    
    renderTitle(title, secondaryTitle) {
        if (secondaryTitle) {
            return (
                <React.Fragment>
                    <div className="page-title">
                        <div className="primary">{title}</div>
                        <div className="secondary">{secondaryTitle}</div>
                    </div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <div className="page-title">
                    <p className="primary-basic">{title}</p>
                </div>
            </React.Fragment>
        );
    }


    render() {
        return (
            <div className="mainPage">
                <div className="page-top">
                    {this.renderTitle(this.props.title, this.props.secondaryTitle)}
                    {this.renderGoBack(this.props.backButtonLink)}
                </div>
                <div className="page-bottom">
                    {this.props.paragraphs.map((paragraph, i) => <div key={i} className="section">{paragraph}</div>)}
                </div>
            </div>
        );
    }
}