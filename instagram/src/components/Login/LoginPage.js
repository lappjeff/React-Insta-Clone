import React from 'react'

import {LoginContainer} from './LoginStyles'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <LoginContainer className='login-container'>
        <LoginForm
          handleChanges={this.props.handleChanges}
          toggleLoggedIn={this.props.loggedIn}
        />
      </LoginContainer>
    )
  }
}
export default LoginPage
