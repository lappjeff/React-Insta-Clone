import React from 'react'

class SearchInput extends React.Component {


  render() {
    return (
      <>
        <form>
          <input
          type='search'
          onChange={this.props.handleSearchChanges}
          name='searchInput'
          placeholder='search'></input>
        </form>

      </>
    )
  }
}
export default SearchInput
