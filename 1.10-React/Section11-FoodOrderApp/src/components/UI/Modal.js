 import classes from './Modal.module.css'
 import {Fragment} from 'react'
 import ReactDOM from 'react-dom'

 // In this document we'll create a PORTAL

 function Backdrop(props){
    return(<div className={classes.backdrop} onClick={props.onClose}/>)
 }

 function ModalOverlay(props){
    return (<div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>)
 }

 // This is the ID from the div that will work as a portal in file index.html
 const portalElement = document.getElementById('overlays')
 
 export function Modal(props) {
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>)
 }