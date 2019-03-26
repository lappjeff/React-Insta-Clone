import React, { Component } from 'react';
import './App.scss';

import PostContainer from './components/PostsContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data'

import PropTypes from 'prop-types'

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

// PostContainer.propTypes = {
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string,
//       username: PropTypes.string
//     })
//   ),
//   thumbnailImg: PropTypes.string,
//   likes: PropTypes.number,
//   postImg: PropTypes.string,
//   userName: PropTypes.string,
// }

// PostContainer.defaultPr

export default App;
