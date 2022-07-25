import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API_KEY } from '../../apiKey';
import { AuthContext } from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory(); // this will help to redirect the user once they change pw

  const newPwInputRef = useRef();
  const authCtx = useContext(AuthContext);

  function submitHandler(event){
    event.preventDefault();
    const enteredNewPw = newPwInputRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,{
      method:'POST',
      body:JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPw,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then( res => {
      // for this example there's no error handling :(
      history.replace('/'); //user will be redirected to root route and won't be able to go back to last page
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPwInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
