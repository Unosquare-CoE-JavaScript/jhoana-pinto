import { useState } from 'react'
import { Card } from '../UI/Card'
import classes from './AddUser.module.css'
import { Button } from '../UI/Button'
import { ErrorModal } from '../UI/ErrorModal'

function AddUser( props ){

    const [ newUsername, saveUserName ] = useState('');
    const [ newAge, SaveAge ] = useState('');
    const [ error, SetError ] = useState();

    function newUserNameHandler( event ){
        saveUserName(event.target.value);
    }

    function newAgeHandler( event ){
        SaveAge(event.target.value);
    }

    function addUserDefault( event ){
        event.preventDefault();

        if(newUsername.trim().length === 0 || +newAge.trim().length === 0){
            SetError({
                title: 'Oops!',
                message: 'Empty field, try again...'
            })
            return;
        } 
        if(+newAge <= 0){
            SetError({
                title: 'Oops!',
                message: 'Age must be grater than 0, try again...'
            })
            return;
        }

        saveUserName('');
        SaveAge('');

        props.onAddUser(newUsername, newAge);
    }

    function ErrorHandler(){
        SetError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm = {ErrorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserDefault}>
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" value={newUsername} onChange={newUserNameHandler}></input>
                <label htmlFor="age">Age:</label>
                <input id="age" type="number" value={newAge} onChange={newAgeHandler} min={1}></input>
                <Button type="submit">Add user!</Button>
            </form>
        </Card>
        </div>
    )
}

export { AddUser }