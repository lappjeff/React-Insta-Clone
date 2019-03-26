import React, { Component } from 'react';
import './App.scss';

import {SearchBar, PostContainer} from './components'
import dummyData from './dummy-data'

import PropTypes from 'prop-types'

class App extends Component {
  constructor() {
    super();

    this.state = {
      dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <SearchBar />
          {this.state.dummyData.map(post => {
            return (
              <PostContainer
                key={Date.now() + Math.random(1, 50)} thumbnailImg={post.thumbnailUrl}
                postImg={post.imageUrl}
                userName={post.username}
                likes={post.likes}
                comments={post.comments}
                timestamp={post.timestamp}
              />
            )
          })}
        </div>
      </div>
    );
  }
}



export default App;
