import React from 'react';
import Nav from './Nav';
import Search from './Search';

export default function Header () {
    return (
        <div className='header'>
            <h1><a href='/'>NY$E Company Data</a></h1>
        {/* <Nav /> */}

        <Search />
        </div>
    )
};
