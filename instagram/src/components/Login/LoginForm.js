import React from 'react'

const LoginForm = props => {
  return (
    <form>

      <p>Enter Username:</p>
      <input
        onChange={props.handleChanges}
        name='username'
        placeholder='Username'
      />

      <p>Enter Password:</p>
      <input name='password'
        placeholder='Password'
        onChange={props.handleChanges}
      />
      <button
      onClick={props.toggleLoggedIn}
      type='submit'>Submit</button>

    </form>
  )
}
export default LoginForm
