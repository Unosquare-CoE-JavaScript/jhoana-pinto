import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // Declaring sideEffect
  useEffect(()=>{
    // Indicates if user is logged
    const userLogInfo = localStorage.getItem('isLoggedIn');
    
    // Checks current value of session
    if(userLogInfo === '1' ){
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

    // Clears session value
  const logoutHandler = () => {
    // removes the state from the local sstorage
    localStorage.removeItem('isLoggedIn')

    // indicates that the user is no longer logged in
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
