import React from 'react'
import PropTypes from 'prop-types'

const PostHeader = props => {
  return (
    <header>
      <img src={props.thumbnailImg} alt='user icon'/>
      <span>{props.username}</span>
    </header>
  )
}

PostHeader.propTypes = {
  thumbnailImg: PropTypes.string,
}
export default PostHeader
