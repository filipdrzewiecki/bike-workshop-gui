import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';
import { Link } from "react-router-dom";


class LoginForm extends React.Component {

  renderInput = ({ input, type, placeholder, meta }) => {
    return (
      <div className="login__field">
        <input {...input} autoComplete="off" placeholder={placeholder} type={type} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderResponseError(isError) {
    if (isError) {
      return <div className="err">Niepoprawny login lub hasło</div>
    }
  }

  render() {
    return (
      <div className="grid">
        <div className="form-login">
          <header className="login__header"><h3 className="login__title">Login</h3></header>

          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            {this.renderResponseError(this.props.isError)}

            <div className="login__body">
              <Field name="login" type="text" component={this.renderInput} placeholder="Login" required />
              <Field name="password" type="password" component={this.renderInput} placeholder="Password" required />
            </div>
            <footer className="login__footer">
              <button className="submit"> Login </button>
              <Link className="registerButton" to={`/register`}> NOWE KONTO </Link>
            </footer>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm);