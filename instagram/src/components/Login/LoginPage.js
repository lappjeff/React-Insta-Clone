import React from 'react'
import './login.scss'

import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='login-container'>
        <LoginForm
          handleChanges={this.props.handleChanges}
          toggleLoggedIn={this.props.toggleLoggedIn}
        />
      </div>
    )
  }
}
export default LoginPage
