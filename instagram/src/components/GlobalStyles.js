import React from 'react'
import styled from 'styled-components'

const Icon = styled.i `
  margin: ${props => props.margin};
`

const Text = styled.p `
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

export {Icon, Text}
