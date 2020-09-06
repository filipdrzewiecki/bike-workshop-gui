import React, { Component } from 'react';
import './mobileNavbar.css';
import CompanyLogo from '../../../resources/companyLogo.png';
import HamburgerLogo from '../../../resources/icon/hamburger.png';
import { Link } from "react-router-dom";

import SideDrawer from './SideDrawer/SideDrawer.jsx';
import Backdrop from './Backdrop/Backdrop.jsx';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="navbarLogo_mobil" >
                <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
            </div>
            <div className="hamburger_menu"  >
                <img src={HamburgerLogo} alt="companyLogo" onClick={props.drawerClickHandler}></img>
            </div>

        </nav>
    </header>
);

export default class Navbar extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

            </div>
        );
    }
}