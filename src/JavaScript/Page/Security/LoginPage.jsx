import React from 'react';
import './LoginPage.css';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SingUpComponent';

class LoginPage extends React.Component {

  render() {
    console.log(this.props);
    return (
      <LoginComponent />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}


export default connect(mapStateToProps)(LoginPage);