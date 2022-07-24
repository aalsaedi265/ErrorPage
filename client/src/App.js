import React,{useState,useEffect} from 'react';
import './App.css';
import NavBar from './comp/Navbar'
import {Route,Routes} from "react-router-dom"
import Common from './comp/Common'
import OurIssue from './comp/OurIssue'
import Credientals from './comp/Credientals'



function App() 
{
  const [user, setUser] = useState('')

  useEffect( () => {
    fetch('/me').then( res =>{
      if ( res.ok)
      {
        res.json().then(data => setUser(data) )
      }
    })
  },[])

  function login(client)
  {
    setUser(client)
  }
  function logOut()
  {
    setUser(null)
  }

  return (

    <div className="App">

    <NavBar user={user} logOut={logOut}/>

    <Routes>

    <Route exact path="/" element={ <Credientals user={user} logIn={login} /> } />

    <Route exact path='/ourIssue' element={ <OurIssue/>}/>

    <Route exact path='/Common' element={ <Common/>}/>

    </Routes>


    </div>
  );
}

export default App;
