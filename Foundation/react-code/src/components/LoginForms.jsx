import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Log in functionality -------------------------------------------------------------------------------------------------------------------------------------------------
function LoginForms({Login, error}) {
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        
        Login(details);
    }
// Log in page -----------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className='background'>
        <form className='highcontainer middle' onSubmit={submitHandler}>
            <div className='form-inner box'>
                <h1>Log In</h1>

                <br></br>

                {(error != "") ? ( <div className='error ErrorText'>{error}</div>) : ""}
                <div className='form-group'>
                    <label htmlFor='name'> Name:</label>
                    <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'> Email:</label>
                    <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'> Password:</label>
                    <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>           
                <input className='hoverable middle' type='submit' value='Submit'/>
            </div>
        </form>
    </div>
  )
}

export default LoginForms