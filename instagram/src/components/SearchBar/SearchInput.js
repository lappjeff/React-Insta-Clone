import React from 'react'

class SearchInput extends React.Component {


  render() {
    return (
      <>
        <form>
          <input onChange={this.props.handleSearchChanges} placeholder='search'></input>
        </form>

      </>
    )
  }
}
export default SearchInput
