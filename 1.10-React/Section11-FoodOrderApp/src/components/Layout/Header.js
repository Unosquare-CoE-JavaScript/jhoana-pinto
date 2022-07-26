import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import { Fragment } from 'react';
import { Button } from './Button';

function Header(props){

    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <Button onClick={props.onShowCart}>Cart</Button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Niiice food'/>
        </div>
    </Fragment>)
}

export { Header }