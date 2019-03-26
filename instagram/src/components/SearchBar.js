import React from 'react'
import './searchBar.scss'


const SearchBar = props => {
  return (
    <nav>
      <div>
        <i className="fab fa-instagram"></i>
        <p> | Instagram </p>
      </div>
      <input placeholder='search'></input>
      <div className='icons'>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </nav>
  )
}

export default SearchBar
