import { useContext, useRef, useState } from 'react';
import classes from './AuthForm.module.css';
import { API_KEY } from '../../apiKey';
import { AuthContext } from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const history = useHistory(); // this will help to redirect the user once they login
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const pwInputRef = useRef();
  const emailInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submitHandler(event){
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPw = pwInputRef.current.value;

    // optional: add validation

    setIsLoading(true);
    let url;
    const queryData = { // object required by this specifict API
          email:enteredEmail,
          password:enteredPw,
          returnSecureToken:true
        };

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }
    
      fetch(url, // link for firebase API
        {
          method:'POST',
          body:JSON.stringify(queryData),
          headers:{
            'Content-Type':'application/json'
          }
        }
      ).then( res => {
        setIsLoading(false);
        if(res.ok){
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication failed!'
            if( data && data.error && data.error.message){
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      }).then(data => {
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn *1000)) // converts defaul time out from secs to ms
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/'); //user will be redirected to root route and won't be able to go back to last page
      })
      .catch(err => {
        alert(err.message)
      });
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={pwInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
