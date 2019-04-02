import React from 'react'

import SearchInput from './SearchInput'

import {Icon} from '../GlobalStyles'
import {Header, LogoHeader} from './SearchBarStyles'

const SearchBar = props => {
  return (

    <Header>
      <LogoHeader>
        <Icon className="fab fa-instagram" />
        <p> | Instagram </p>
      </LogoHeader>
      <SearchInput handleSearchChanges={props.handleSearchChanges}/>
      <div className='icons'>
        <Icon className="far fa-compass" />
        <Icon className="far fa-heart" />
        <Icon className="far fa-user" />
      </div>
    </Header>
  )
}

export default SearchBar
