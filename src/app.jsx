import Navbar from './JavaScript/Page/Navbar/navbar';
import PageBody from './JavaScript/Page/PageElements/body';
import React from 'react';

import { Router } from "react-router-dom";
import Footer from './JavaScript/Page/PageElements/footer';
import SlidingNavbar from './JavaScript/Page/Navbar/slidingNavbar';
import './JavaScript/Css/index.css';
import history from './history';
import LoginPage from './JavaScript/Page/Security/LoginPage';
import {autoLogin} from './JavaScript/Page/Security/userActions';

import {connect} from 'react-redux';


class App extends React.Component {

    componentDidMount(){
        this.props.autoLogin()
      }

    render() {
        console.log(this.props)

        if (this.props.userReducer.loggedIn) {
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

const mapStateToProps = (state) => {
    return {
      userReducer: state.userReducer
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      autoLogin: () => dispatch(autoLogin())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App);