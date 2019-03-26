import React from 'react'

class CommentInput extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.addNewComment}>
        <input
          name='comment'
          value={this.props.comment}
          onChange={this.props.handleChanges}
          placeholder='Add a comment...'
          />
        <i className="fas fa-ellipsis-h"></i>
      </form>
    )
  }
}
export default CommentInput
