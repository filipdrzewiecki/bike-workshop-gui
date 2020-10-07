import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';


class LoginForm extends React.Component {

    renderInput = ({ input, type, placeholder, meta }) => {
        return (
          <div className="login__field">
            <input {...input} autoComplete="off" placeholder={placeholder} type={type}/>
          </div>
        );
      }
    
      onSubmit = (formValues) => {
        console.log("Oto formularz", formValues)
        this.props.onSubmit(formValues);
      }
    
      handleChange(event) {
        this.setState({ value: event.target.value });
      }

    render() {
        return (


            <div className="grid">

                <div className="form-login">

                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                        <header className="login__header"><h3 className="login__title">Login</h3></header>

                        <div className="login__body">
                            <Field name="login" type="text" component={this.renderInput} placeholder="Login" required/>
                            <Field name="password" type="password" component={this.renderInput} placeholder="Password" required />
                        </div>

                        <footer className="login__footer">
                            <button className="submit"> Login </button>
                            <p><span className="icon icon--info">?</span>Forgot Password</p>
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