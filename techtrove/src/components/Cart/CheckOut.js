import { useRef } from 'react';

import classes from './CheckOut.module.css';

const Checkout = (props) => {
  const nameInputRef = useRef();
  const zipCodeInputRed = useRef();
  const municipalityInputref = useRef();
  const addressInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredZipCode = zipCodeInputRed.current.value;
    const enteredMunicipality = municipalityInputref.current.value;
    const enteredAddress = addressInputRef.current.value;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='zip-code'>Zip Code</label>
        <input type='text' id='zip-code' ref={zipCodeInputRed} />
      </div>
      <div className={classes.control}>
        <label htmlFor='municipality'>Municipality</label>
        <input type='text' id='municipality' ref={municipalityInputref} />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;