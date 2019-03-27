import React, { Component } from 'react';
import './App.scss';

import PostContainer from './components/PostsContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data'


class App extends Component {
  constructor() {
    super();

    this.state = {
       data: []
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }
  
  render() {
    return (
      <div className="App">
        <div className='container'>
          <SearchBar />
          <PostContainer posts={this.state.data} />


        </div>
      </div>
    );
  }
}

export default App;
