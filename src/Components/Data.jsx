import React from 'react';
import Apple from './Homepage_Companies/Apple.jsx';
import Facebook from './Homepage_Companies/Facebook.jsx';
import Microsoft from './Homepage_Companies/Microsoft.jsx';
import MorganStanley from './Homepage_Companies/MorganStanley.jsx';
import Snapchat from './Homepage_Companies/Snapchat.jsx';
import Tesla from './Homepage_Companies/Tesla.jsx';

//This function renders the individual companies on the homepage. This component will render on the Home component
export default function Data () {
    
    return (
        <div className='dataDisplay'>
        <div>
        <h1>Please See a Sample Portfolio</h1>
        </div>
        {/* The two divs holding the companies were an easy way for me to organize the display */}
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
