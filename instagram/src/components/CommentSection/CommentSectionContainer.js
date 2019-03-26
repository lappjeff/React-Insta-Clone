import React from 'react'
import './commentSection.scss'
import CommentInput from './CommentInput'
import Comment from './Comment'

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    }
  }

  render() {
    return (
      <div className='comment-section'>
      <Comment comments={this.props.comments} />
      <CommentInput />
      </div>
    )
  }
}

export default CommentSectionContainer
