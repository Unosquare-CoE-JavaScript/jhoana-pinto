import classes from './Input.module.css'
import React from 'react'

export const Input = React.forwardRef(( props, ref ) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </div>
})