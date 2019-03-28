import React from 'react'

const withAuthenticate = First => Second =>
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <First
          {...this.props}
        />;
      }
      return <Second
        {...this.props}
      />
    }
  }


export default withAuthenticate
