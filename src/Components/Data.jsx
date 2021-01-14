import React from 'react';
import Apple from './Apple.jsx';
import Facebook from './Facebook.jsx';
import Microsoft from './Microsoft.jsx';
import MorganStanley from './MorganStanley.jsx';
import Snapchat from './Snapchat.jsx';
import Tesla from './Tesla.jsx';

export default function Data () {

    return (
        <div className='dataDisplay'>
        <div>
        <h1>Please See a Sample Portfolio Below</h1>
        </div>
        <div className='companyDataDisplay1'>
            <Apple />

            <Microsoft />

            <Tesla />
        </div>
        <br/>
        <div className='companyDataDisplay2'>
            <MorganStanley />

            <Snapchat />

            <Facebook />

        </div>



        </div>
        
    )
};
