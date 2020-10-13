import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { registerUser } from './userActions'
import _ from 'lodash';

class RegisterPage extends React.Component {

  onSubmit = (formValues) => {
    this.props.registerUser(formValues);
  }

  renderReponseError() {
    if (this.props.userReducer.error && !_.isEmpty(this.props.userReducer.error)) {
      console.log("Error w page: ");
      console.log(this.props.userReducer.error);
      return this.props.userReducer.error;
    }
  }

  render() {
    return (
      <RegisterForm onSubmit={this.onSubmit} errorResponse={this.renderReponseError()} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, { registerUser })(RegisterPage);