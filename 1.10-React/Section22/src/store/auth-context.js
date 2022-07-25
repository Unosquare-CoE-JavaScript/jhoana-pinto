import React, { useCallback, useEffect, useState } from 'react';

let logoutTimer;    // this will save the timer so it can be cleared if needed

export const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login: token =>{},
    logout: () => {}
});

function calculateRemainingTime(expirationTime){
    const currentTime = new Date().getTime();   // checks time at current moment
    const adjExpirationTime = new Date(expirationTime).getTime(); //gets expiration time in ms

    const remainingTime = adjExpirationTime - currentTime;
    return remainingTime;
}

function retreiveStoredToken(){
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 3600){
        localStorage.removeItem('token')    // if there were already session data it'll al be deleted
        localStorage.removeItem('expirationTime')
        return null;
    }

    return {
        token:storedToken,
        duration: remainingTime
    }
}

export function AuthContextProvider(props){

    const tokenData = retreiveStoredToken();

    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;  // checks if there's already a token
    }
    const [token, setToken] = useState(initialToken)    //if there's no token the user is not loggedIn
    const userIsLoggedIn = !!token; // converts truthy or falsy values to boolean

    const logoutHanlder = useCallback(()=>{    // when logging out the toket will be cleared
        setToken(null);
        localStorage.removeItem('token'); // when loggingout the token will be removed from the session
        localStorage.removeItem('expirationTime');  // same for expirationTime

        if(logoutTimer){    //if user logged out the timer will be cleared
            clearTimeout(logoutTimer);
        }
    }, [])
    
    function loginHanlder(token, expirationTime){   // when logging in the toket will be set
        setToken(token);
        localStorage.setItem('token', token);   // the token will be saved in the browser so if the page reloads the user wont logout
        localStorage.setItem('expirationTime', expirationTime);   // same for expirationTime

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHanlder, remainingTime)// after the remainingTime the user will be loggedout
        //logoutTimer = setTimeout(logoutHanlder, 3000)    // same as previous line but with 3 secs for testing
    }

    useEffect(()=>{ // if token data changes...
        if (tokenData){
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHanlder, tokenData.duration)
        }
    }, [tokenData, logoutHanlder])

    const contextValue = {  // values that can be accesed in this context
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHanlder,
        logout: logoutHanlder
    }

    return (    // this will give access to children
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}