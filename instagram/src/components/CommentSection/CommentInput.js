import React from 'react'

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value})
  }


  render() {
    return (
      <form>
        <input
          onChange={this.handleChanges}
          value={this.state.comment}
          name='comment'
          placeholder='Add a comment...'
          />
        <i className="fas fa-ellipsis-h"></i>
      </form>
    )
  }
}
export default CommentInput
