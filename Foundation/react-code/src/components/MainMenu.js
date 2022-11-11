import React, { useState } from 'react'
import App from '../App'
import LoginForms from './LoginForms'

// Functionality ----------------------------------------------------------------
function MainMenu(user){
// Main menu page ---------------------------------------------------------------
    return(
        <html className='background'>
            <banner>
                <form>
                    <input className='hoverable middle' type='submit' value='Log out'/>
                </form>
            </banner>
            <h1>
                Welcome
            </h1>
        </html>
    )
}

export default MainMenu