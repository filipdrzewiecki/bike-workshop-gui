import React from 'react';
import ReactDOM from 'react-dom';

import './JavaScript/Css/index.css';

import Navbar from './JavaScript/Page/Navbar/navbar';
import PageBody from './JavaScript/Page/PageElements/body';

import { BrowserRouter as Router } from "react-router-dom";
import Footer from './JavaScript/Page/PageElements/footer';
import SlidingNavbar from './JavaScript/Page/Navbar/slidingNavbar';

class App extends React.Component {

    render() {
        return (
                <Router>
                    <SlidingNavbar />
                    <Navbar />
                    <PageBody />
                    <Footer />
                </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);