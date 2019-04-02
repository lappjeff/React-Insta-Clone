import React from 'react'
import {Form, LoginInput, LoginButton} from './LoginStyles'

const LoginForm = props => {
  return (
    <Form>

      <p>Enter Username:</p>
      <LoginInput
        onChange={props.handleChanges}
        name='username'
        placeholder='Username'
      />

      <p>Enter Password:</p>
      <LoginInput name='password'
        placeholder='Password'
        type='password'
        onChange={props.handleChanges}
      />
      <LoginButton
      onClick={props.toggleLoggedIn}
      type='submit'>Submit</LoginButton>

    </Form>
  )
}
export default LoginForm
