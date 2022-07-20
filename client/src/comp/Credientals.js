
import React,{useState} from 'react';
import logo from '../logo.svg';

export default function Credientals({user,logIn}){

    const [name, setName] = useState('')
    const [num, setNum] =useState(null)
    const [errName, setErrName] = useState('')
    const [errNum, setErrNum] = useState('')
    const [load,setLoad] = useState(false)

    function submit(send)
    {
        send.preventDefault()
        setLoad(true)

        fetch('/login',{
           method: 'POST',
           headers: {"Content -Type" : "application/json"},
           body : JSON.stringify({name,num})
        })
        .then( res => {
            setLoad(false)
            if(res.ok)
            {
                res.json().then(data => logIn(data) )
            }else{
                res.json().catch( err =>{
                    setErrName('wrong name')
                    setErrNum('wrong number')
                })
            }
        })
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
