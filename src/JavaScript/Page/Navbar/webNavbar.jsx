import React from 'react';
import CompanyLogo from '../../../resources/companyLogo.png';
import './webNavbar.css';
import { Link } from "react-router-dom";



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

        return (
            <div className="navbar-container" >
                <div className="navbar_web" >

                    <div className="navbarLogo_web" >
                        <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
                    </div>

                    <div className="navbarButtons_web" >
                        <Link to={`/${this.getUserName()}/garage`} > Twoje rowery </Link>
                        <Link to="/bicycles" > Katalog rowerów </Link>
                        <Link to="/parts" > Katalog części </Link>
                        <button onClick={() => this.clearClick()}> Wyloguj </button>
                    </div>
                </div>
            </div>
        );
    }


}



export default Navbar;