import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };


  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    let user = {
      email: email,
      password: password
    }
    axios.post('/login', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          console.log(response.data)
          this.props.handleLogin(response.data)
          // this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };



  redirect = () => {
    this.props.history.push('/')
  }


  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }



  render() {
    const { email, password } = this.state
    return (
      <div className='login-container'>
        <div className='login-slogan'>
          <p>You are what you do.</p>
          <p>You decide what you do.</p>
          <p>You decide who you are.</p>
          <p>We're just here to remind you.</p>
        </div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1>Habit<br /> Helper</h1>
          <input className='login-input'
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input className='login-input'
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button className='login-submit-button'
            placeholder="submit"
            type="submit">
            Log In
          </button>
          <div className='or-sign-up'>
            <p> <a href='/signup'>or sign up</a></p>
          </div>

        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Login;