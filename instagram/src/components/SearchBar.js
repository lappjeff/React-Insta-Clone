import React from 'react'
import './searchBar.scss'


const SearchBar = props => {
  return (
    <div className='search-section'>
      <span><i class="fab fa-instagram"></i> | Instagram</span>
      <input placeholder='search'></input>
      <div className='icons'>
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>
    </div>
  )
}

export default SearchBar
