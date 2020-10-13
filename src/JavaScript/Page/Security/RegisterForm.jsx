import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';
import { Link } from "react-router-dom";


class RegisterForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error">{error}</div>
      )
    }
  }

  renderInput = ({ input, label, type, placeholder, meta }) => {
    return (
      <div className="login__field">
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={placeholder} type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  renderResponseError() {
    if (this.props.errorResponse) {
      return <div className="err">{this.props.errorResponse.message}</div>
    }
  }


  render() {
    return (
      <div className="grid">
        <div className="form-login">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <header className="login__header"><h3 className="login__title">Rejestracja</h3></header>
            {this.renderResponseError()}
            <div className="login__body">
              <Field name="userName" label="Nazwa użytownika" type="text" component={this.renderInput} placeholder="" required />
              <Field name="email" label="email" type="text" component={this.renderInput} placeholder="" required />
              <Field name="password" label="hasło" type="text" component={this.renderInput} placeholder="" required />
              <Field name="repeatedPassword" label="powtórz hasło" type="text" component={this.renderInput} placeholder="" required />
            </div>
            <footer className="login__footer">
              <button className="submit"> ZAŁÓŻ </button>
              <Link className="registerButton" to={`/login`}> POWRÓT </Link>
            </footer>
          </form>
        </div>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  const required = 'Pole obowiązkowe';

  if (!formValues.userName) {
    errors.userName = required;
  }

  if (!formValues.email) {
    errors.email = required;
  }

  if (!formValues.password) {
    errors.password = required;
  }

  if (!formValues.repeatedPassword) {
    errors.repeatedPassword = required;
  }

  return errors;
}


export default reduxForm({
  form: 'registerForm',
  validate: validate
})(RegisterForm);