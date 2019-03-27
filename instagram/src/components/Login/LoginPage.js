import React from 'react'
import './login.scss'
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  

  render() {
    return (
      <div className='login-container'>
        Hello from login container
        <form>
          <p>Enter Username:</p>
          <input name='username' placeholder='Username'/>
          <p>Enter Password:</p>
          <input name='password' placeholder='Username'/>
          <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}
export default LoginPage
