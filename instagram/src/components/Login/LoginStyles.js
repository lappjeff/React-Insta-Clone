import styled from 'styled-components'

const LoginContainer = styled.div `
  background: #4c68d7;
  margin: 10% auto;
  width: 50%;
  height: 300px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
`
const Form = styled.form `
  grid-column: 2 / 5;
  grid-row: 2 / 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LoginInput = styled.input `
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
`

const LoginButton = styled.button `
  border: none;
  background: white;
  height: 45px;
`
export {Form, LoginInput, LoginButton, LoginContainer}
