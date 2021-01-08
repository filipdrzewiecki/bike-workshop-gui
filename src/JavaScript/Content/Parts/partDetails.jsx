import React from 'react';
import IconGoBack from '../../../resources/icon/go-back.png';
import { Link } from "react-router-dom";
import DeleteIcon from "../../../resources/icon/page/delete.svg";
import EditIcon from "../../../resources/icon/page/edit.svg";
import DropdownIcon from "../../../resources/icon/page/dots.svg";
import PartSections from './partSections';

export default class PartDetails extends React.Component {

    renderDropdownMenu() {
        if (!this.props.part) {
            return <div>Loading...</div>
        }
        return (
            <div className="dropdown">
                <div className="dropbtn"><img src={DropdownIcon} alt="delete" ></img></div>
                <div className="dropdown-content">
                    <div><img src={DropdownIcon} alt="dots" ></img></div>
                    <li><Link to={this.props.editLink}><img src={EditIcon} alt="edit" ></img></Link></li>
                    <li><Link to={this.props.deleteLink}><img src={DeleteIcon} alt="delete" ></img></Link></li>
                </div>
            </div>
        );
    }

    RenderGoBack() {
        if (this.props.backButtonLink != null) {
            return (
                <div className="go-back-button">
                    <Link to={this.props.backButtonLink}><img src={IconGoBack} alt="GoBack" ></img></Link>
                </div>
            );
        }
        return null;
    }

    RenderTitle() {
        return (
            <div className="empty-container">
                <div className="page-title">
                    <div className="primary">{this.props.title}
                        {this.renderDropdownMenu()}
                    </div>
                    <div className="secondary">{this.props.secondaryTitle}</div>
                </div>
            </div>
        );
    }

    renderAddToBicycle() {
        if (this.props.addToBicycleLink) {
            return <Link to={this.props.addToBicycleLink}><button className="add-part-button"> DODAJ DO ROWERU </button></Link>
        }
    }

    render() {
        const part = this.props.part;
        const type = this.props.part.product;
        return (
            <div className="mainPage">
                <div className="page-top">
                    {this.RenderTitle()}
                    {this.RenderGoBack()}
                </div>
                <div className="page-bottom">
                    <PartSections type={type} part={part}/>
                    {this.renderAddToBicycle()}
                </div>
                <div className="page-pagination">
                </div>
            </div>
        );
    }
}