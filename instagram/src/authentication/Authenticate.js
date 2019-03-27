import React from 'react'

const withAuthenticate = First => Second =>
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (localStorage.getItem('username')) {
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
