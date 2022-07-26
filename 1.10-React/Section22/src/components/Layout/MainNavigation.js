import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  function logoutHanlder(){
    authCtx.logout(); // this function was declared inside the context, it'll set the token to null
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (<li>  {/* if user is not loggedIn give them the chance to do so */}
            <Link to='/auth'>Login</Link>
          </li>)}
          {isLoggedIn && <li> {/* if user is loggedIn give them access to profile */}
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLoggedIn && <li>
            <button onClick={logoutHanlder}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
