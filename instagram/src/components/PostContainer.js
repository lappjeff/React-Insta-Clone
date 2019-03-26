import React from 'react'
import CommentSection from './CommentSection'
import './postContainer.scss'

import PropTypes from 'prop-types'

const PostContainer = props => {
  return (
    <div className='post-container'>
      <header>
        <img src={props.thumbnailImg} alt='user profile'/>
        <span>{props.userName}</span>
      </header>

      <main>
        <img src={props.postImg} alt='posted by user'/>
        <div className='icons'>
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <p className='likes'>{`${props.likes} likes`}</p>
        </div>
        <CommentSection
          timestamp={props.timestamp}
          comments={props.comments}/>
      </main>
    </div>
  )
}

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  ),
  thumbnailImg: PropTypes.string,
  likes: PropTypes.number,
  postImg: PropTypes.string,
  userName: PropTypes.string,
}

export default PostContainer
