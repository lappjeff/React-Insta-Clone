import React from 'react'
import PropTypes from 'prop-types'
import {Username} from './CommentStyles'
const Comment = props => {
  return (
    <>
      {props.comments.map(comment => {
        return (
          <div key={Date.now + Math.random(1, 50)}>
            <p>
              <Username>{comment.username}</Username> {comment.text}
            </p>
          </div>
        )
      })}
    </>
  )
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
)

}
export default Comment
