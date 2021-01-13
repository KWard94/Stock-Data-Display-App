import React, { useState, useEffect } from 'react';
// import App from '../App';
// import STOCK_API_KEY from './env.local'


export default function Data () {
    const [data, setData] = useState();

    const fetchData = () => {


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
        <h1>Data Here!</h1>
        </div>
        <div className='companyDisplay'>
            <h5>Company Name: {data.companyName}</h5>
            <h6>Stock Ticker: ${data.symbol}</h6>
            <h6>Current Price: ${data.latestPrice}</h6>
        </div>


        </div>
        
    )
};
