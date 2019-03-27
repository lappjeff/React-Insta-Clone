import React from 'react'

import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'
class PostsPage extends React.Component {

  render () {
    return (
      <div className='container'>
        <SearchBar handleSearchChanges={this.props.handleSearchChanges}/>
        <PostContainer
          filteredData={this.props.filteredData} posts={this.props.posts}
        />


      </div>
    )
  }
}

export default PostsPage
