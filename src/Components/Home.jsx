import React from 'react';
import { Route } from 'react-router-dom';
// import DummyCompA from './DummyCompA';
import Data from './Data';

export default function Home () {
    return (
        <div className='home'>
            <div className='stockContainer'>
            <Data />

            {/* <Route exact path='/dummycompA' component={DummyCompA}/>

            <Route exact path='/' component={Home}/> */}

            </div>
        </div>
    )
};