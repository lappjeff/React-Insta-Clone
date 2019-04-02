import React from 'react'
import {Icon} from '../GlobalStyles'
import {CommentForm, NewComment} from './CommentStyles'
class CommentInput extends React.Component {

  render() {
    return (
      <CommentForm onSubmit={this.props.addNewComment}>
        <NewComment
          name='comment'
          value={this.props.comment}
          onChange={this.props.handleChanges}
          placeholder='Add a comment...'
          />
        <Icon className="fas fa-ellipsis-h" />
      </CommentForm>
    )
  }
}
export default CommentInput
