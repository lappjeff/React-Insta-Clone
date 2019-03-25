import React, { Component } from 'react';
import './App.scss';

import {SearchBar, PostContainer, CommentSection} from './components'
import dummyData from './dummy-data'
class App extends Component {
  constructor() {
    super();

    this.state = dummyData

  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <SearchBar />
          {this.state.map(post => {
            return (
              <PostContainer
                key={Date.now() + Math.random(1, 50)} thumbnailImg={post.thumbnailUrl}
                postImg={post.imageUrl}
                userName={post.username}
                likes={post.likes}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
