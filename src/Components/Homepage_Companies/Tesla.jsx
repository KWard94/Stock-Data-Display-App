import React, { useState, useEffect } from 'react';

export default function Tesla () {
    const [data, setData] = useState();

  
    useEffect(() => {
    const ticker = 'tsla';
    const fetchData = () => {
        const key = process.env.REACT_APP_API_KEY;
      
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${key}`

    fetch(url)
    .then(res => res.json())
    .then(res =>{
        // console.log(res)
        setData(res)
    })
}


    fetchData()
}, [])


    return (
        <div className='dataDisplay'>
       
        <div className='companyDisplay'>
            <h5>Company Name: {data.companyName}</h5>
            <h6>Stock Ticker: ${data.symbol}</h6>
            <h6>Current Price: ${data.latestPrice}</h6>
        </div>



        </div>
        
    )
};
