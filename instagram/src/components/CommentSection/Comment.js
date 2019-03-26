import React from 'react'

const Comment = props => {
  return (
    <>
      {props.comments.map(comment => {
        return (
          <div key={Date.now + Math.random(1, 50)}>
            <p><span>{comment.username}</span> {comment.text}</p>
          </div>
        )
      })}
    </>
  )
}

export default Comment
