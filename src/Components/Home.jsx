import React from 'react';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import DummyCompA from './DummyCompA';
=======
// import DummyCompA from './DummyCompA';
>>>>>>> b00e1a1 (revert no API key)
import Data from './Data';

export default function Home () {
    return (
        <div className='home'>
            <div className='stockContainer'>
<<<<<<< HEAD
            <h1>HOME COMPONENT</h1>
=======
            <h1>NY$E Company Data</h1>
>>>>>>> b00e1a1 (revert no API key)
            <Data />


            <p>Will they be hard coded? only time will tell...</p>

            {/* <Route exact path='/dummycompA' component={DummyCompA}/>

            <Route exact path='/' component={Home}/> */}

            </div>
        </div>
    )
};