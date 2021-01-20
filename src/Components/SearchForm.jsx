import React, {useState, useEffect } from 'react';


//unsure if I will need all of these parameters below

function SearchForm({ handleSubmit, searchString }) {
    
  
    
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
        className='search-input'
          placeholder="Search by Stock Symbol"
          type="text"
          name="searchString"
          required
          value={searchString}
        />
        <button className='search-button' type="submit">Search</button>
      </form>
    );
  }

export default SearchForm;