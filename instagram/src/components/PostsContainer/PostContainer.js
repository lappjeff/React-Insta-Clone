import React from 'react'
import './postContainer.scss'

import Post from './Post'

class PostContainer extends React.Component{

  render () {
    return (
      <>
      {this.props.posts.map(post => {
        return (
          <Post likes={post.likes} increaseLikes={this.increaseLikes} key={post.imageUrl} postItem={post}/>
        )
      })}
      </>
    )
  }
}


export default PostContainer
