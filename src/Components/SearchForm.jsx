import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import { Link, Redirect } from 'react-router-dom';


//unsure if I will need all of these parameters below

function SearchForm({data, setData, }) {
    
const [searchString, setSearchString] = useState('')
const [successfulSearch, setSuccessfulSearch] = useState(false);

   function handleChange(event) {
       setSearchString(event.target.value);
   }

   function handleSubmit(event) {
       event.preventDefault();
       getData(searchString);
       setSuccessfulSearch(true)
      }


// useEffect((event) => {
//     getData(searchString)
//     console.log(`Search Test Here: ${{searchString}}`);
// }, [])

const getData = async (searchString) => {
    const ticker = searchString;
    const key = process.env.REACT_APP_API_KEY;
    const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${key}`


    const dataResponse = await fetch(url)
    const dataJson = await dataResponse.json()
    console.log(dataJson);
    setData(dataJson)
}
if (successfulSearch) {
  return(<Redirect to='/result'/>)
}
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
        className='search-input'
          placeholder="Search by Stock Symbol"
          type="text"
          name="Search-Symbol"
          required
          onChange={handleChange}
          value={searchString}
        />
        {/* <button className='search-button' type="submit" onSubmit={handleSubmit}>Search</button> */}


        <button className='search-button' type="submit" onSubmit={handleSubmit}>Search</button>

      </form>
    );
  }

export default SearchForm;