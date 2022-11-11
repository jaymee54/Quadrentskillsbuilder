import React, {useState} from 'react';
import LoginForms from './components/LoginForms';
import MainMenu from './components/MainMenu';


// Users ---------------------------------------------------------------------------------
function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }
// Constants ------------------------------------------------------------------------------
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  // Check details ------------------------------------------------------------------------
  const Login = details => { 
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){

      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      });

    } else {

        console.log("details do not match")
        setError("Details do not match!")

    }
  }
// Logout ---------------------------------------------------------------------------------
  const Logout = () => {
    setUser({name: "", email: ""});
  }
// Render pages log in and logged in ------------------------------------------------------
  return (
    <div className="App">
      {(user.email != "" ) ? (
        <MainMenu />
        // want this replaced with link to the main menu
        ) : (
          <LoginForms Login={Login} error={error} />
        )}
    </div>
  );
}
    


export default App;
