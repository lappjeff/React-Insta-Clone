import React, { Component } from 'react';
import './App.scss';

import {SearchBar, PostContainer, CommentSection} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <SearchBar />
          <PostContainer />
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default App;
