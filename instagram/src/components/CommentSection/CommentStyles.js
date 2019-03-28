import styled from 'styled-components'

const Username = styled.span `
  color: #256FA9;
`

const CommentForm = styled.form `
  border-top: 1px solid gray;
  margin: 10px 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NewComment = styled.input `
  border: none;
  width: 95%;
  height: 100%;
`
export {Username, CommentForm, NewComment}
