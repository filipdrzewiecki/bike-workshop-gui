import Navbar from './JavaScript/Page/Navbar/navbar';
import PageBody from './JavaScript/Page/PageElements/body';
import React from 'react';

import { Router } from "react-router-dom";
import Footer from './JavaScript/Page/PageElements/footer';
import SlidingNavbar from './JavaScript/Page/Navbar/slidingNavbar';
import './JavaScript/Css/index.css';
import history from './history';
import LoginPage from './JavaScript/Page/Security/LoginPage';


class App extends React.Component {
  isLoggedIn() {
    let isLogged = localStorage.getItem("token");
    return (
      (isLogged != null)
    );
  }

    render() {
        console.log(this.props)

        if (this.isLoggedIn()) {
            return (
                <Router history={history}>
                    <SlidingNavbar />
                    <Navbar />
                    <PageBody />
                    <Footer />
                </Router>
            );
        } else {
            return (
                <LoginPage/>
            );
        }

    }
}


  export default App;