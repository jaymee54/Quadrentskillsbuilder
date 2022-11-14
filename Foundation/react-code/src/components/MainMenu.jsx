import React, { useEffect, useState } from 'react'
import App from '../App'
import LoginForms from './LoginForms'
import  ReactDOM  from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router'

// Functionality ----------------------------------------------------------------
function AppLink() {
   const navigate = useNavigate();

    useEffect(() => {
    navigate('http://localhost:3000/');
   })
 
}

function MainMenu(user){

    const logout = e =>{
        e.preventDefault();
        

        //App.Logout();
        AppLink();
    }
// Main menu page ---------------------------------------------------------------
    return(
        <div className='background'>
            <div className='banner'>
                <h1 className='bannerObject'>
                    Main Menu
                </h1>
                <form onSubmit = {null}>
                    <input className='hoverable middle bannerObject' type='submit' value='Quadrent'/>
                </form>
                <form onSubmit = {null}>
                    <input className='hoverable middle bannerObject' type='submit' value='Reload'/>
                </form>
                <form onSubmit = {logout}>
                    <input className='hoverable middle bannerObject' type='submit' value='Logout'/>
                </form>
            </div>
            <h1>
                Menu options below:
            </h1>
        </div>
    )
}

export default MainMenu