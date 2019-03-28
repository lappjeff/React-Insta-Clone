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
       searchInput: '',
       username: '',
       password: '',
       loggedIn: false

    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  componentDidMount() {
    this.setState({data: dummyData})

  }

  toggleLoggedIn = event => {
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      localStorage.setItem('username', this.state.username)
      localStorage.setItem('password', this.state.password)

    } else {
      event.preventDefault();
      return alert('Please fill both fields')
    }
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


        <ComponentFromWithAuthenticate
          filteredData={filteredData}
          posts={this.state.data}
          handleChanges={this.handleChanges}
          loggedIn={this.toggleLoggedIn}
        />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage)

export default App;
