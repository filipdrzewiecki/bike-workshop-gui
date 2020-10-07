import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { fetchUser } from './userActions'

class LoginPage extends React.Component {

  onSubmit = (formValues) => {
    this.props.fetchUser(formValues);
    console.log(formValues)
  }

  render() {
    console.log(this.props);
    return (
      <LoginForm onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect (mapStateToProps, {fetchUser} ) (LoginPage);

//export default connect(mapStateToProps)(LoginPage);