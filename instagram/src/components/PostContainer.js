import React from 'react'
import CommentSection from './CommentSection'
import './postContainer.scss'

const PostContainer = props => {
  return (
    <div className='post-container'>
      <header>
        <img src={props.thumbnailImg} alt='user profile image'/>
        <span>{props.userName}</span>
      </header>

      <main>
        <img src={props.postImg}></img>
        <div className='icons'>
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <p>{`${props.likes} likes`}</p>
        </div>
        <CommentSection />
      </main>
    </div>
  )
}

export default PostContainer
