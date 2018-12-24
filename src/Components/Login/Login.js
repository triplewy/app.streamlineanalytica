import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchLogin, fetchSignup } from './Login.operations'
import logo from '../../Images/streamline-logo.png'
import Loader from 'react-loader-spinner'
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: true,

      username: '',
      password: '',

      signupUsername: '',
      signupPassword: '',
      signupConfirmPassword: ''
    }
  }

  render() {
    return (
      <div className='Login'>
        <img src={logo} />
        <p className='title'>Streamline</p>
        <p className='error'>{this.props.error}</p>
        {this.state.login ?
          <div>
            <div className='inputWrapper'>
              <input placeholder='Username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
              <hr />
              <input placeholder='Password' type='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
              <div className='loginButton' onClick={() => this.props.login(this.state.username, this.state.password)}>
                {this.props.loading ?
                  <Loader
                    type="Puff"
                    color="white"
                    height="20"
                    width="20"
                  />
                  :
                  <p>Login</p>
                }
              </div>
            </div>
            <p className='createAccount'>Don't have an account? <span onClick={() => this.setState({login: false})}>Sign up here</span></p>
          </div>
          :
          <div>
            <div className='inputWrapper'>
              <input placeholder='Username' value={this.state.signupUsername} onChange={(e) => this.setState({signupUsername: e.target.value})} />
              <hr />
              <input placeholder='Password' type='password' value={this.state.signupPassword} onChange={(e) => this.setState({signupPassword: e.target.value})} />
              <hr />
              <input placeholder='Confirm Password' type='password' value={this.state.signupConfirmPassword} onChange={(e) => this.setState({signupConfirmPassword: e.target.value})} />
              <div className='loginButton' onClick={() => this.props.signup(this.state.signupUsername, this.state.signupPassword, this.state.signupConfirmPassword)}>
                {this.props.loading ?
                  <Loader
                    type="Puff"
                    color="white"
                    height="20"
                    width="20"
                  />
                  :
                  <p>Create Account</p>
                }
              </div>
            </div>
            <p className='createAccount'>Back to <span onClick={() => this.setState({login: true})}>login</span></p>
          </div>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.login.error,
    loading: state.login.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(fetchLogin(username, password)),
    signup: (username, password, confirmPassword) => dispatch(fetchSignup(username, password, confirmPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
