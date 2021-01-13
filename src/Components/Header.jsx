import React from 'react';
import Nav from './Nav';
import Search from './Search';

export default function Header () {
    return (
        <div className='header'>
        <h1>HEADER</h1>
        <Nav />

        <Search />
        </div>
    )
};