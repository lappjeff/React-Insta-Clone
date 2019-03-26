import React, { Fragment }from 'react'
import './commentSection.scss'

import PropTypes from 'prop-types'

const CommentSection = props => {
  return (
    <div className='comment-section'>
      {props.comments.map(comment => {
        return (
          <Fragment key={Date.now + Math.random(1, 50)}>
            <p><span>{comment.username}</span> {comment.text}</p>
          </Fragment>
        )
      })}
      <form>
        <input placeholder='Add a comment...'/>
        <i className="fas fa-ellipsis-h"></i>
      </form>
    </div>
  )
}

export default CommentSection
