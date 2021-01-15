import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import AppleDetails from './Company-Details/AppleDetails';
// import DummyCompA from './DummyCompA';
import Data from './Data';

export default function Home () {
    return (
        <div className='home'>
            <div className='stockContainer'>
            <Data />


            </div>
        </div>
    )
};