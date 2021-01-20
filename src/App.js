import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import CompanyDetails from './Components/Company-Details/AppleDetails.jsx';
import AppleDetails from './Components/Company-Details/AppleDetails.jsx';
import FacebookDetails from './Components/Company-Details/FacebookDetails';
import MicrosoftDetails from './Components/Company-Details/MicrosoftDetails';
// import MorganStanley from './Components/Homepage_Companies/MorganStanley';
import SnapchatDetails from './Components/Company-Details/SnapchatDetails';
import TeslaDetails from './Components/Company-Details/TeslaDetails';
import MorganStanleyDetails from './Components/Company-Details/MorganStanleyDetails';
import SearchResults from './Components/SearchResults';

function App() {

  const [data, setData] = useState();

    const getData = async () => {
    const ticker = '';
    const key = process.env.REACT_APP_API_KEY;
    const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${key}`


    const dataResponse = await fetch(url)
    const dataJson = await dataResponse.json()
    setData(dataJson)
}

useEffect(() => {

    getData()
    }, [])

  return (
    <div className="App">

      <Header data={data} setData={setData}/>
      <Route exact path='/result' render={() => {
        return(
        <SearchResults data={data} setData={setData}/>)
      }}/>
      <main>



      <Route exact path ='/' component={Home} />

      <Route path='/Company-Details/AppleDetails.jsx' exact component={AppleDetails}/>

      <Route path='/Company-Details/FacebookDetails.jsx' exact component={FacebookDetails}/>

      <Route path='/Company-Details/MicrosoftDetails.jsx' exact component={MicrosoftDetails}/>

      <Route path='/Company-Details/MorganStanleyDetails.jsx' exact component={MorganStanleyDetails}/>

      <Route path='/Company-Details/SnapchatDetails.jsx' exact component={SnapchatDetails}/>

      <Route path='/Company-Details/TeslaDetails.jsx' exact component={TeslaDetails}/>


      </main>

      <Footer />

      <main>
    

      </main>

    </div>
  );
}

export default App;

