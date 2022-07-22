
import React,{useState} from 'react';
import logo from '../logo.svg';

export default function Credientals({user,logIn}){

    const [name, setName] = useState('')
    const [num, setNum] =useState(0)
    const [errName, setErrName] = useState('')
    const [errNum, setErrNum] = useState('')
    const [load,setLoad] = useState(false)

    function submit(send)
    {
        console.log('button has been clicked')
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
                <form onSubmit={submit}>

                    <p>Number</p>
                    <input placeholder="ID" style={{color:'black'}} type='number'name='id'
                    required
                    value={num}
                    onChange={e => setNum(e.target.value) }
                    />
                    <br></br>
                    <p>Name</p>
                    <input style={{color:'black'}} type='text' name='name'
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <br></br>
                   
                    <button style={{color:'black'}} type='submit' value='submit'/>
                   
                </form>

                {user? <p>loged in move on to CSs</p> : <p>not yet</p>}
            <img src={logo} className="App-logo" alt="logo" />

            </header>
        </>
    )
}
