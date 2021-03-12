import './bicycleDetails.css';
import '../../Css/dropdownMenu.css';
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import DeleteIcon from "../../../resources/icon/page/delete.svg";
import EditIcon from "../../../resources/icon/page/edit.svg";
import DropdownIcon from "../../../resources/icon/page/dots.svg";
import { getUserName } from '../../Page/Security/authHeader';
import { mapBicycleEnum } from '../../Page/PageElements/Utils.jsx'

export default class BicycleDetails extends React.Component {

    renderDropdownMenu() {
        if (!this.props.bicycle) {
            return <div>Loading...</div>
        }
        return (
            <div className="dropdown">
                <div className="dropbtn"><img src={DropdownIcon} alt="delete" ></img></div>
                <div className="dropdown-content">
                    <div><img src={DropdownIcon} alt="dots" ></img></div>
                    <li><Link to={`/${getUserName()}/bicycles/${this.props.bicycle.name}/edit`}><img src={EditIcon} alt="edit" ></img></Link></li>
                    <li><Link to={`/${getUserName()}/bicycles/${this.props.bicycle.name}/delete`}><img src={DeleteIcon} alt="delete" ></img></Link></li>
                </div>
            </div>
        );
    }

    RenderPicture() {
        return (
            <div className="picture">
                <img src={`http://localhost:8080/image/2`} alt="GoBack" ></img>
            </div>
        );
    }

    RenderTitle() {
        return (
            <div className="bicycle-page-title">
                <div className="primary">{this.props.title}
                    {this.renderDropdownMenu()}
                </div>
                <div className="secondary">{this.props.secondaryTitle}</div>
                <div className="contentField">
                    {mapBicycleEnum(this.props.bicycle.type)} {this.props.bicycle.predefinedWeight} kg
                </div>
            </div>
        );
    }

    renderPart(part, partName) {
        if (part) {
            return <Link to={`/${getUserName()}/bicycles/${this.props.bicycle.name}/${partName}`}> {part.brand} </Link>;
        }
        return (
            <div className="link">
                <Link to={`/${getUserName()}/bicycles/${this.props.bicycle.name}/${partName}/new`}>stwórz </Link> | <Link to={`/parts/${partName}`} >dodaj istniejący</Link>
            </div>
        );
    }

    render() {
        return (
            <Fragment>
                <div className="bicycle_profile_left">
                        {this.RenderPicture()}
                </div>
                <div className="bicycle_profile_right">
                    <div className="bicycle-page-top">
                        {this.RenderTitle()}
                    </div>
                    <div className="bicycle-page-bottom">

                        <div className="contentField">
                            <div className="fieldName">Rama: </div>
                            <div className="fieldValue">{this.renderPart(this.props.bicycle.frame, 'frame')}</div>
                        </div>
                        <div className="contentField">
                            <div className="fieldName">Widelec: </div>
                            <div className="fieldValue">{this.renderPart(this.props.bicycle.fork, 'fork')}</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}