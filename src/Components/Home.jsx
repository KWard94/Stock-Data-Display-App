import React from 'react';
import Data from './Data';
//This Component renders the Data component and display. In retrospect I do not need both components for home and data, I could have just used one to simplify the code.
export default function Home () {
    return (
        <div className='home'>
            <div className='stockContainer'>
            <Data />


            </div>
        </div>
    )
};