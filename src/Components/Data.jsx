import React, { useState, useEffect } from 'react';


export default function Data () {
    const [data, setData] = useState();

    //this api key does not work, need to troubleshoot
    const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
        

    const fetchData = () => {
        fetch(`https://cloud.iexapis.com/stable/stock/XOM/quote?token=${API_KEY}`)
        
        //figure out this url

    .then(res => res.json())
    .then(res =>{
        console.log(res)
        setData(res)
    })
}

useEffect(() => {
    fetchData(data)
}, [])


    return (
        <div className='dataDisplay'>
        <div>
        <h1>Please See a Sample Portfolio Below</h1>
        </div>
        <div className='companyDisplay'>
            {/* <h5>Company Name: {data.companyName}</h5>
            <h6>Stock Ticker: ${data.symbol}</h6>
            <h6>Current Price: ${data.latestPrice}</h6> */}
        </div>


        </div>
        
    )
};
