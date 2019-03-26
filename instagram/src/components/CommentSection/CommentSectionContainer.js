import React from 'react'
import './commentSection.scss'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import Comment from './Comment'

const CommentSectionContainer = props => {
  return (
    <div className='comment-section'>
      <Comment comments={props.comments} />
      <CommentInput />
    </div>
  )
}

export default CommentSectionContainer
