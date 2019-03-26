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

PostHeader.defaultProps = {
  username: 'Guest',
  thumbnailImg: 'https://scontent.fphl2-1.fna.fbcdn.net/v/t1.0-1/p200x200/17796836_1150382925090762_736476295883560996_n.jpg?_nc_cat=100&_nc_ht=scontent.fphl2-1.fna&oh=13511462a1a349ddc9b905b6e7faefc8&oe=5D457FD1'
}
export default PostHeader
