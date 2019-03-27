import React from 'react'
import './commentSection.scss'
import CommentInput from './CommentInput'
import Comment from './Comment'

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsCopy: this.props.comments,
      comment: '',
      username: 'lappjeff'
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

  //   const newComment = this.props.comments.slice();
  //   const array = [
  //     ...this.props.co
  //   ]
  // }

  // addNewComment = (event, index) => {
  //   event.preventDefault();
  // }

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
