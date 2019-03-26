import React from 'react'
import CommentSection from './CommentSection'
import './postContainer.scss'

const PostContainer = props => {
  const {
    thumbnailImg,
    userName,
    postImg,
    timestamp,
    comments,
    likes} = props
  return (
    <div className='post-container'>
      <header>
        <img src={thumbnailImg} alt='user profile'/>
        <span>{userName}</span>
      </header>

      <main>
        <img src={postImg} alt='posted by user'/>
        <div className='icons'>
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <p className='likes'>{`${likes} likes`}</p>
        </div>
        <CommentSection
          timestamp={timestamp}
          comments={comments}/>
      </main>
    </div>
  )
}

PostContainer.defaultProps = {
  thumbnailImg: 'https://scontent.fphl2-1.fna.fbcdn.net/v/t1.0-1/p200x200/17796836_1150382925090762_736476295883560996_n.jpg?_nc_cat=100&_nc_ht=scontent.fphl2-1.fna&oh=13511462a1a349ddc9b905b6e7faefc8&oe=5D457FD1',
  likes: 0 
}

export default PostContainer
