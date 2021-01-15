import React, { useState, useEffect } from 'react';

export default function TeslaDetails () {

    const [data, setData] = useState();

  
   

        const getData = async () => {
            const ticker = 'tsla';
            const key = process.env.REACT_APP_API_KEY;
            const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${key}`
    
    
            const dataResponse = await fetch(url)
            const dataJson = await dataResponse.json()
                console.log(dataJson)
            setData(dataJson)
        }
    
        useEffect(() => {
    
            getData()
            }, [])
    
        return (
    
            <div className='dataDisplay'>
           {
               data != undefined
               ? 
               <div className='detailCompanyDisplay'>
                <h3>Company Name: {data.companyName}</h3>
                <h6>Stock Ticker: ${data.symbol}</h6>
                <h6>Current Price: ${data.latestPrice}</h6>
                <h6>Change from Previous Close: {(data.changePercent * 100).toFixed(2)} %</h6>
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
    
        