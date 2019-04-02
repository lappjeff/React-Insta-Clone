import React from 'react'
import CommentInput from './CommentInput'
import Comment from './Comment'

const userName = localStorage.getItem('username')

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsCopy: this.props.comments,
      comment: '',
      username: userName
    }
  }

  addNewComment = (event, index) => {
    event.preventDefault();

    const commentsCopied = this.state.commentsCopy.slice();
    const newComment = {
      username: this.state.username,
      text: this.state.comment
    }

    if(newComment.text) {
      commentsCopied.push(newComment)
      this.setState({
        commentsCopy: commentsCopied,
        comment: ''
      })
    }
    return
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className='comment-section'>
        <Comment comments={this.state.commentsCopy} />
        <CommentInput
          addNewComment={this.addNewComment}
          handleChanges={this.handleChanges}
          comment={this.state.comment}
          />
      </div>
    )
  }
}

export default CommentSectionContainer
