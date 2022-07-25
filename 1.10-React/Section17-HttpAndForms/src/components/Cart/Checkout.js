import { useRef, useState } from 'react';
import classes from './Checkout.module.css'

// helper functions
const isEmpty = val => val.trim() === '';
const isFiveChars = val => val.trim().length === 5;

export function Checkout(props){

    const [firmInputsValidity, setFormInputsValidity] = useState({  // all validations will start as true
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    function confirmHandler(event){
        event.preventDefault();
        // current value in any reference checks the value of where the reference was made
        const enteredName = nameInputRef.current.value; 
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        // Validates data with helper functions
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFiveChars(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({ // Updates validation
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredPostalIsValid,
            postalCode: enteredPostalIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

        if( !formIsValid ){  // if data is invalid the user will be informed about it // if data is valid the cart data will be submited
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostal,
        });
    }

    // if a field is invalid its class will change
    const nameControlClasses = `${classes.control} ${firmInputsValidity.name ? '' : classes.invalid}`; 
    const streetControlClasses = `${classes.control} ${firmInputsValidity.street ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${firmInputsValidity.city ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${firmInputsValidity.postalCode ? '' : classes.invalid}`;

    return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!firmInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!firmInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!firmInputsValidity.postalCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!firmInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}