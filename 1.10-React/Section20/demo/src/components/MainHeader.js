import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css'

export function MainHeader(){
    return (<header className={classes.header}>
        <nav>
            <ul>
                <li> {/* NavLink highlights the active link with the help of the activeClassName parametter */}
                    <NavLink activeClassName={classes.active} to="/welcome">Welcome!</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>)
}