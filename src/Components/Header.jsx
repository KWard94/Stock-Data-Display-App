import React from 'react';
import Nav from './Nav';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import Search from './Search';

export default function Header ({data, setData, changePage}) {
    return (
        <div className='header'>
            <h1 className='mainTitle'><a href='/'>The Public Informant</a></h1>
            <br/>
            <p className='tagLine'>A place for daily updated stock data from the New York Stock Exchange</p>
        {/* <Nav /> */}
        <SearchForm changePage={changePage} data={data} setData={setData} />
        {/* <Search /> */}

        </div>
    )
};
