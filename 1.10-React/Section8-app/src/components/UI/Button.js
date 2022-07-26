import classes from './Button.module.css';

function Button( props ){
    return <button className={classes.button} onClick={props.onClick} type={props.type || 'button'}>
        { props.children }
        </button>
}

export { Button };