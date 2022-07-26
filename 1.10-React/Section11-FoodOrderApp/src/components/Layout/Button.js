import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../store/cart-context'

export function Button( props ){
    //Giving context to Cart
    const cartCntx = useContext(CartContext);
    
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const numberOfCartItems = cartCntx.items.reduce( (currentNumber, item) => { return currentNumber+item.amount}, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    const { items } = cartCntx;

    useEffect(() => {  // whenever you add an item the bump animation will be called
        if (items.length === 0) {
        return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
        }, 300);

        return () => {
        clearTimeout(timer);
        };
    }, [items]); // checks if the num of items changes

    return (<button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon /> </span>
        <span> Your Cart </span>
        <span className={classes.badge}> {numberOfCartItems}</span>
    </button>)
}

