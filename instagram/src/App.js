import React, { Component } from 'react';
import './App.scss';

import PostContainer from './components/PostsContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data'


class App extends Component {
  constructor() {
    super();

    this.state = {
       data: [],
       searchInput: ''
    }
  }

  handleSearchChanges = event => {
    this.setState({ searchInput: event.target.value})
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  render() {

    const filteredData = this.state.data.filter(post => {
      return post.username.includes(this.state.searchInput)

      //The above line is just shorthand for this:

      // if (post.username.includes(this.state.searchInput)) {
      //   return true;
      // } else {
      //   return false;
      // }
      
    })

    return (
      <div className="App">
        <div className='container'>
          <SearchBar handleSearchChanges={this.handleSearchChanges}/>
          <PostContainer filteredData={filteredData} posts={this.state.data} />


        </div>
      </div>
    );
  }
}

export default App;
