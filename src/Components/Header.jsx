import React from 'react';
import Nav from './Nav';
import Search from './Search';

export default function Header () {
    return (
        <div className='header'>
            <h1 className='mainTitle'><a href='/'>NY$E Company Data</a></h1>
            <br/>
            <p>A place for daily updated stock data from the New York Stock Exchange</p>
        {/* <Nav /> */}

        <Search />
        </div>
    )
};
