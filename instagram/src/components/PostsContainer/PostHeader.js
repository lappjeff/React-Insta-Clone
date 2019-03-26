import React from 'react'

const PostHeader = props => {
  return (
    <header>
      <img src={props.thumbnailImg} alt='user icon'/>
      <span>{props.username}</span>
    </header>
  )
}
export default PostHeader
