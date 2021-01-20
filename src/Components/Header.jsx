import React from 'react';
import SearchForm from './SearchForm';

export default function Header ({data, setData, changePage}) {
    return (
        <div className='header'>
            <h1 className='mainTitle'><a href='/'>The Public Informant</a></h1>
            <br/>
            <p className='tagLine'>A place for daily updated stock data from the New York Stock Exchange</p>
        <SearchForm data={data} setData={setData} />

        </div>
    )
};
