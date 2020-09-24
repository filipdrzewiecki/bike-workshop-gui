import React from 'react';
import CompanyLogo from '../../../resources/companyLogo.png';
import './webNavbar.css';
import { Link } from "react-router-dom";



const Navbar = () => {

    return (
        <div className="navbar-container" >
            <div className="navbar_web" >
            
                <div className="navbarLogo_web" >
                    <Link to="/"><img src={CompanyLogo} alt="companyLogo" ></img></Link>
                </div>
                
                <div className="navbarButtons_web" >
                    <Link to = "/garage" > Twoje rowery </Link>
                    <Link to = "/bicycles" > Katalog rowerów </Link>
                    <Link to = "/parts" > Katalog części </Link>
                </div>
            </div>
        </div>
    );
}



export default Navbar;