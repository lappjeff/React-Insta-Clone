import React from 'react'
import './postContainer.scss'

import CommentSectionContainer from '../CommentSection/CommentSectionContainer'
import PostHeader from './PostHeader'

const Post = props => {
  return (
    <div className='post-container'>
      <PostHeader
        username={props.postItem.username}
        thumbnailImg={props.postItem.thumbnailUrl}
      />
      <main>
        <img src={props.postItem.imageUrl} alt='user post'/>
        <div className='icons'>
           <i className="far fa-heart"></i>
           <i className="far fa-comment"></i>
           <p className='likes'>{`${props.postItem.likes} likes`}</p>
         </div>
         <CommentSectionContainer comments={props.postItem.comments}/>
      </main>
    </div>
  )
}


export default Post
