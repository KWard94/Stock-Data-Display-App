import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Footer () {
    return(
        <div className='footer'>
            <div>
            <h5>Contact me below:</h5>
            </div>
            <div className='professional-links'>
            <a href='https://www.linkedin.com/in/keenan-k-ward/' target='_blank' ><img src='/Images/Linkedin-Logo.png' alt='LinkedIn'/><br/>My LinkedIn Profile</a>
            <br/>
            <a href='https://github.com/KWard94' target='_blank' ><img src='/Images/GitHub-logo.png' alt='GitHub'/><br/>My Personal Github</a>
            </div>

            
        </div>
    )
};
