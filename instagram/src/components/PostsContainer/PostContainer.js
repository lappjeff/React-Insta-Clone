import React from 'react'
import Post from './Post'

class PostContainer extends React.Component{

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
