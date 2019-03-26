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

// PostContainer.defaultProps = {
//   thumbnailImg: 'https://scontent.fphl2-1.fna.fbcdn.net/v/t1.0-1/p200x200/17796836_1150382925090762_736476295883560996_n.jpg?_nc_cat=100&_nc_ht=scontent.fphl2-1.fna&oh=13511462a1a349ddc9b905b6e7faefc8&oe=5D457FD1',
//   likes: 0
// }

export default PostContainer
