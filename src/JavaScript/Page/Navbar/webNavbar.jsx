import React from 'react';
import CompanyLogo from '../../../resources/companyLogo.png';
import './webNavbar.css';
import { Link, NavLink } from "react-router-dom";


class Navbar extends React.Component {

    clearClick() {
        localStorage.removeItem("token")
        localStorage.removeItem("userName")
        window.location.reload();
    }

    getUserName() {
        let userName = localStorage.getItem("userName")
        return userName;
    }

    render() {
        console.log("navbar stan")

        console.log(this.state)

        return (
            <div className="navbar-container" >
                <div className="navbar_web" >

                    <div className="navbarLogo_web" >
                        <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
                    </div>

                    <div className="navbarButtons_web" >
                        <NavLink className="navbarButton_web" activeClassName='activeBlue' exact to={`/${this.getUserName()}/garage`} >Your bicycles </NavLink>
                        <NavLink className="navbarButton_web" activeClassName='activeRed'to="/bicycles" > Bicycle catalogue </NavLink>
                        <NavLink className="navbarButton_web" activeClassName='activeGreen' to="/parts" > Part catalogue </NavLink>
                        <NavLink className="navbarButton_web" to="/logout"  onClick={() => this.clearClick()}> Logout </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;