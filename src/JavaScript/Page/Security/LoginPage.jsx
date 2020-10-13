import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { fetchUser } from './userActions'
import _ from 'lodash';

class LoginPage extends React.Component {
  onSubmit = (formValues) => {
    this.props.fetchUser(formValues);
  }

  isError() {
    return (
      this.props.userReducer.error && !_.isEmpty(this.props.userReducer.error)
    );
  }

  isResponse() {
    return (
      this.props.userReducer.user && !_.isEmpty(this.props.userReducer.user)
    );
  }

  render() {
    return <LoginForm onSubmit={this.onSubmit} isError={this.isError()} response={this.isResponse()}/>
  }

}


const mapStateToProps = (state) => {
  if (state.userReducer.user) {
    let user = Object.values(state.userReducer.user);
    console.log("user:")
    console.log(user)
  }
  if (state.userReducer.error) {
    console.log("error:")
    console.log(state.userReducer.error)

  }

  return {
    userReducer: state.userReducer

  }
}

export default connect(mapStateToProps, { fetchUser })(LoginPage);

//export default connect(mapStateToProps)(LoginPage);