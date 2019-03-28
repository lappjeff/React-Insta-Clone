import React from 'react'
import {Icon} from '../GlobalStyles'
import {Container, PostIcons } from './PostStyles'

import PropTypes from 'prop-types'
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

          <PostIcons>
            <div onClick={this.increaseLikes} >
              <Icon
                 className="far fa-heart"
                 margin='10px'
                 height='25px'
                 width='20px'
               />
              </div>
              <Icon
                 className="far fa-comment"
                 margin='10px'
                 height='25px'
                 width='20px'
               />
          </PostIcons>

          <p className='likes'>{`${this.state.likes} likes`}</p>

          <CommentSectionContainer
            comments={this.props.postItem.comments}
            handleChanges={this.props.handleChanges}
            logOut={this.props.logOut}
          />
        </main>
      </div>
    )
  }
}

Post.propTypes = {
  likes: PropTypes.number,
  postItem: PropTypes.shape({
      imageUrl: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      username: PropTypes.string
  })
}

export default Post
