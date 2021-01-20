import React, {useState, useEffect } from 'react';
import SearchResults from './SearchResults'


//unsure if I will need all of these parameters below

function SearchForm({ handleChange, handleSubmit, searchString }) {
    
  
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
        className='search-input'
          placeholder="Search by Stock Symbol"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <button className='search-button' type="submit" onSubmit={handleSubmit}>Search</button>
      </form>
    );
  }

export default SearchForm;