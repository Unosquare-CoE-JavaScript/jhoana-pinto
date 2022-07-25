import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const Navigation = (props) => {
  // With this line we'll have access to consume the components of the context required ( AuthContext in this case )
  const cntxt = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {cntxt.isLoggedIn && ( 
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cntxt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cntxt.isLoggedIn && (
          <li>
            {/* On this line 'context' comes from the funtion onLogout provided in line 32 on App.js  */}
            <button onClick={cntxt.onLogout}>Logout</button> 
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
