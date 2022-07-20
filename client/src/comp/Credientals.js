
import React,{useState} from 'react';
import logo from '../logo.svg';

export default function Credientals({user,logIn}){

    const [name, setName] = useState('')
    const [num, setNum] =useState(null)
    const [errName, setErrName] = useState('')
    const [errNum, errSetNum] = useState('')

    function submit(send)
    {
        send.preventDefault()
        
    }

    return (

        <>
            <header className="App-header">
                <form>

                    <p>Number</p>
                    <input style={{color:'black'}} type='integer'name='id'/>
                    <br></br>
                    <p>Name</p>
                    <input style={{color:'black'}} type='text' name='name'/>
                    <br></br>
                   
                    <input style={{color:'black'}} type='button' value='submit'/>
                </form>
      
            <img src={logo} className="App-logo" alt="logo" />

            </header>
        </>
    )
}
