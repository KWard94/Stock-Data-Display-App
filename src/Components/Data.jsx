import React from 'react';
import AppleDetails from './Company-Details/AppleDetails.jsx';
import Apple from './Homepage_Companies/Apple.jsx';
import Facebook from './Homepage_Companies/Facebook.jsx';
import Microsoft from './Homepage_Companies/Microsoft.jsx';
import MorganStanley from './Homepage_Companies/MorganStanley.jsx';
import Snapchat from './Homepage_Companies/Snapchat.jsx';
import Tesla from './Homepage_Companies/Tesla.jsx';


export default function Data () {
    
    return (
        <div className='dataDisplay'>
        <div>
        <h1>Please See a Sample Portfolio</h1>
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
