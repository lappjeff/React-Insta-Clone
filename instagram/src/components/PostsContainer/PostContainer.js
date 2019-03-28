import React from 'react'
import './postContainer.scss'

import Post from './Post'

class PostContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <>
      {this.props.filteredData.map(post => {
        return (
          <Post
          likes={post.likes}
          increaseLikes={this.increaseLikes}
          key={post.imageUrl}
          postItem={post}
          handleChanges={this.props.handleChanges}
          />

        )
      })}
      </>
    )
  }
}


export default PostContainer
