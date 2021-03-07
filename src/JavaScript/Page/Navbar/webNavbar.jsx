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

                <div className="navbar_web_top" >
                    <div className="navbarLogo_web" >
                        <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
                    </div>

                    <div className="navbar_top_search">
                        <input></input>
                    </div>

                    <div className="navbarButtons_web_top" >
                        <NavLink className="navbarButton_web_top" activeClassName='active' to="/profile"  > Profile </NavLink>
                        <NavLink className="navbarButton_web_top" activeClassName='active' to="/logout"  onClick={() => this.clearClick()}> Logout </NavLink>
                    </div>
                </div>

                <div className="navbar_web_bottom" >
                    <div className="navbarButtons_web_bottom" >
                        <NavLink className="navbarButton_web_bottom" activeClassName='active' to={`/${this.getUserName()}/bicycles`} >Your bicycles </NavLink>
                        <NavLink className="navbarButton_web_bottom" activeClassName='active' to={`/${this.getUserName()}/parts`} >Your Parts </NavLink>
                        <NavLink className="navbarButton_web_bottom" activeClassName='active'to="/bicycles" > Bicycle catalogue </NavLink>
                        <NavLink className="navbarButton_web_bottom" activeClassName='active' to="/parts" > Part catalogue </NavLink>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;