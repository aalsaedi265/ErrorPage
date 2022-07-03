import React from 'react';
import './App.css';
import NavBar from './comp/Navbar'
import {Route,Routes} from "react-router-dom"
import Common from './comp/Common'
import OurIssue from './comp/OurIssue'
import Credientals from './comp/Credientals'



function App() {
  return (

    <div className="App">

    <NavBar/>

    <Routes>

    <Route exact path="/" element={ <Credientals/>} />

    <Route exact path='/ourIssue' element={ <OurIssue/>}/>

    <Route exact path='/Common' element={ <Common/>}/>

    </Routes>


    </div>
  );
}

export default App;
