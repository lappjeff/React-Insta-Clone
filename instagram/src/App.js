import React, { Component } from 'react';
import './App.scss';

import dummyData from './dummy-data'
import PostsPage from './components/PostsContainer/PostsPage'
import LoginPage from './components/Login/LoginPage'
import withAuthenticate from './authentication/Authenticate'


class App extends Component {
  constructor() {
    super();

    this.state = {
       data: [],
       searchInput: ''
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value})
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
      <LoginPage
        handleChanges={this.handleChanges}
      />

      <ComponentFromWithAuthenticate
        filteredData={filteredData}
        posts={this.state.data}
        handleChanges={this.handleChanges}
      />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

export default App;
