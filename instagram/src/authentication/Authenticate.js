import React from 'react'

const withAuthenticate = Component =>
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return <Component
        {...this.props}
      />;
    }
  }


export default withAuthenticate
