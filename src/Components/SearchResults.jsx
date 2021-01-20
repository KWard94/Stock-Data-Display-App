import React from 'react';
import SearchForm from './SearchForm.jsx';

export default function SearchResults ({data}) {
    console.log(`test: ${data}`)
    return (
        
        <div className='dataDisplay'>
       {
           data != undefined
           ? 
           <div className='detailCompanyDisplay'>
            <h3>Company Name: {data.companyName}</h3>
            <h6>Stock Ticker: ${data.symbol}</h6>
            <h6>Current Price: ${data.latestPrice}</h6>
            <h6 style={data.changePercent>0 ? {color:'green'}:{color:'red'}}>Change from Previous Close: {(data.changePercent * 100).toFixed(2)} %</h6>
            <h6>52 Week High: ${data.week52High}</h6>
            <h6>52 Week Low: ${data.week52Low}</h6>
            <p>Last Updated: {data.latestTime} (Times are displayed in EST)</p>


        </div>
        :
        null
       }

        </div>
        
    )
};