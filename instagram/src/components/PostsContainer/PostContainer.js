import React from 'react'
import './postContainer.scss'

import Post from './Post'

const PostContainer = props => {
  return (
    <>
      {props.posts.map(post => {
        return (
          <Post key={post.imageUrl} postItem={post}/>
        )
      })}
    </>
  )
}


export default PostContainer
