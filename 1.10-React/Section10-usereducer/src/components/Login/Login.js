import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import { Input } from '../UI/Input/Input';

// this function will be the first parametter for the reducer declaration
// is declared outside login because it won't need any data from it
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value:action.val, isValid: action.val.includes('@') }; // this is also the second param for the reducer declaration
  }

  if(action.type === 'INPUT_BLUR') {
     return {value: state.value, isValid: state.value.includes('@') }; // this is also the second param for the reducer declaration
  }

  return {value:'', isValid: false }  // this is also the second param for the reducer declaration
};

const pwReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value:action.val, isValid: action.val.trim().length > 6 };
  }

  if(action.type === 'INPUT_BLUR') {
     return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return {value:'', isValid: false }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  // Reducer declaration
  const [emailState, dispatchEmail ] = useReducer(emailReducer, {value:'', isValid: null });  

  const [pwState, dispatchPw ] = useReducer(pwReducer, {value:'', isValid: null });  

  const cntxt = useContext(AuthContext);

  const emailInputRef = useRef();
  const pwInputRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: pwIsValid } = pwState;
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid( emailIsValid && pwIsValid );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, pwIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT',val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && pwState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({type:'USER_INPUT', val:event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPw({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      cntxt.onLogin(emailState.value, pwState.value); //Here we access the Auth context
    } else if(!emailIsValid){
      emailInputRef.current.focus()
    } else {
      pwInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id="email" label="E-Mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input ref={pwInputRef} id="password" label="Password" type="password" isValid={pwIsValid} value={pwState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
