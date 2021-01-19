import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
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

function App() {

  return (
    <div className="App">

      <Header />
      <main>

      {/* <Route path='/Company-Details/:symbol.jsx' exact component={AppleDetails}/> */}


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
