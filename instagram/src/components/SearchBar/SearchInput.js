import React from 'react'

import {SearchForm} from './SearchBarStyles'

class SearchInput extends React.Component {
  render() {
    return (
      <>
        <SearchForm>
          <input
          type='search'
          onChange={this.props.handleSearchChanges}
          name='searchInput'
          placeholder='search'></input>
        </SearchForm>
      </>
    )
  }
}
export default SearchInput
