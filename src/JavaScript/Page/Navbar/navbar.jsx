import React, { Component } from 'react';

import MobileToolbar from './mobileNavbar.jsx';
import WebToolbar from './webNavbar.jsx';

import MediaQuery from 'react-responsive';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <MediaQuery maxWidth={768}>
                    <MobileToolbar />
                </MediaQuery>
                <MediaQuery minWidth={769}>
                    <WebToolbar />
                </MediaQuery>
            </div>
        );
    }

}
