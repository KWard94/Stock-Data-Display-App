import React from 'react';
import { Route } from 'react-router-dom';
// import DummyCompA from './DummyCompA';
import Data from './Data';

export default function Home () {
    return (
        <div className='home'>
            <div className='stockContainer'>
            <Data />


            <p>Will they be hard coded? only time will tell...</p>

            {/* <Route exact path='/dummycompA' component={DummyCompA}/>

            <Route exact path='/' component={Home}/> */}

            </div>
        </div>
    )
};