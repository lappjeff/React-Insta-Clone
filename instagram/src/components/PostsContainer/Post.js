import React from 'react'
import './postContainer.scss'

import CommentSectionContainer from '../CommentSection/CommentSectionContainer'
import PostHeader from './PostHeader'

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes
    }
  }

  increaseLikes = () => {
    let addLike = this.state.likes + 1;

    this.setState({ likes: addLike })
  }

  render() {
    return (
      <div className='post-container'>
      <PostHeader
      username={this.props.postItem.username}
      thumbnailImg={this.props.postItem.thumbnailUrl}
      />
      <main>
      <img src={this.props.postItem.imageUrl} alt='user post'/>
      <div className='icons'>
      <div onClick={this.increaseLikes} >
      <i className="far fa-heart"></i>
      </div>
      <i className="far fa-comment"></i>
      </div>
      <p className='likes'>{`${this.state.likes} likes`}</p>
      <CommentSectionContainer comments={this.props.postItem.comments}/>
      </main>
      </div>
    )
  }
}


export default Post
