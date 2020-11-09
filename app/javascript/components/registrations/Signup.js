import React, { Component } from 'react';
import axios from 'axios'
import './Signup.css'


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }

  
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {name, email, password, password_confirmation} = this.state
    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('/api/v1/users', {user}, {withCredentials: true})
    .then(response => { console.log(response.data)
      if (response.status === 200) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/identities/new')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }
render() {
    const {name, email, password, password_confirmation} = this.state
return (
      <div className='signup-container'>
        
       <form className='signup-form' onSubmit={this.handleSubmit}>
        <h1>Atomic Habits</h1>
          <input className='signup-input'
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input className='signup-input'
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input className='signup-input'
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input className='signup-input'
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button className='signup-submit-button' placeholder="Signup" type="submit">
            Sign Up
          </button>
      
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
export default Signup;