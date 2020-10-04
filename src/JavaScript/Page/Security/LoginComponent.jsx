import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from './userActions'
import './LoginPage.css';


class LoginComponent extends React.Component {
    state = {
        login: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (formValues) => {
        console.log('formularz: ' + this.state)
        formValues.preventDefault()
        this.props.fetchUser(this.state)
    }

    render() {
        return (


            <div class="grid">

                <div className="form-login">

                    <form action="/" method="post" class="form login" onSubmit={this.onSubmit}>

                        <header class="login__header">
                            <h3 class="login__title">Login</h3>
                        </header>

                        <div class="login__body">

                            <div class="form__field">
                                <input name="login" type="login" placeholder="Login" onChange={this.handleOnChange} value={this.state.login} required />
                            </div>

                            <div class="form__field">
                                <input name="password" type="password" placeholder="Password" onChange={this.handleOnChange} value={this.state.password} required />
                            </div>

                        </div>

                        <footer class="login__footer">
                            <input type="submit" value="Login" />

                            <p><span class="icon icon--info">?</span><a href="#">Forgot Password</a></p>
                        </footer>

                    </form>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)