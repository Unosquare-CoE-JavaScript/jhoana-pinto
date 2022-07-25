import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import React, { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
  const cntxt = useContext(AuthContext);
  return (
      //<AuthContext.Provider value= {{isLoggedIn:isLoggedIn, onLogout: logoutHandler}}> {/* this tag comes from the AuthContext and it'll PROVIDE acces to its components to all children inside it */} 
      <React.Fragment> {/* This line can be deleted when using <AuthContext.Provider> because it functions as a container*/ }
        <MainHeader/>
        <main>
          {!cntxt.isLoggedIn && <Login/>}
          {cntxt.isLoggedIn && <Home/>}
        </main>
     </React.Fragment> 
  );
}

export default App;
