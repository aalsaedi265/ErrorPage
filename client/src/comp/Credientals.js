
import React from 'react';
import logo from '../logo.svg';

export default function Credientals(){

    return (

        <>
            <header className="App-header">
                <form>

                    <p>Number</p>
                    <input type='integer'name='id'/>
                    <br></br>
                    <p>Name</p>
                    <input type='text' name='name'/>
                    <br></br>
                   
                    <input style={{color:'black'}} type='button' value='submit'/>
                </form>
      
            <img src={logo} className="App-logo" alt="logo" />

            </header>
        </>
    )
}
