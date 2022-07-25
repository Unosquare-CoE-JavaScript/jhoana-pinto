import { Fragment } from 'react'
import classes from './Layout.module.css'
import { MainNavigation } from './MainNavigation'

// the goal of this component is to render the main navigation side-by-side with the page content
export function Layout(props){
    return <Fragment>
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
    </Fragment>
}