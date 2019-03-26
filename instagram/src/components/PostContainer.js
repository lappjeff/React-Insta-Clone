import React from 'react'
import CommentSection from './CommentSection'
import './postContainer.scss'

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



export default PostContainer
