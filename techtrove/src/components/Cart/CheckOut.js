import { useRef, useState } from 'react';

import styles from './CheckOut.module.css';

const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [ formInputsValidity, setFormInputsValidity ] = useState({
        name: true,
        zipCode: true,
        municipality: true,
        address: true
    });

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

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredZipCodeIsValid = !isNotFiveChars(enteredZipCode);
    const enteredMunicipalityIsValid = !isEmpty(enteredMunicipality);
    const enteredAddressIsValid = !isEmpty(enteredAddress);

    setFormInputsValidity({
        name: enteredNameIsValid,
        zipCode: enteredZipCodeIsValid,
        municipality: enteredMunicipalityIsValid,
        address: enteredAddressIsValid
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredZipCodeIsValid &&
      enteredMunicipalityIsValid &&
      enteredAddressIsValid;
    
      if (!formIsValid) {
        return;
      }

    console.log(formInputsValidity.name);

  };

  const nameControlStyles = `${styles.control} ${
    !formInputsValidity.name && styles.invalid
  }`;
  const zipCodeControlStyles = `${styles.control} ${
    !formInputsValidity.zipCode && styles.invalid
  }`;
  const municipalityControlStyles = `${styles.control} ${
    !formInputsValidity.municipality && styles.invalid
  }`;
  const addressControlStyles = `${styles.control} ${
    !formInputsValidity.address && styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlStyles}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        { !formInputsValidity.name && <p>Please enter a valid name.</p> }
      </div>
      <div className={zipCodeControlStyles}>
        <label htmlFor='zip-code'>Zip Code</label>
        <input type='text' id='zip-code' ref={zipCodeInputRed} />
        { !formInputsValidity.zipCode && <p>Please enter a valid zip code.</p> }
      </div>
      <div className={municipalityControlStyles}>
        <label htmlFor='municipality'>Municipality</label>
        <input type='text' id='municipality' ref={municipalityInputref} />
        { !formInputsValidity.municipality && <p>Please enter a valid municipality.</p> }
      </div>
      <div className={addressControlStyles}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' ref={addressInputRef} />
        { !formInputsValidity.address && <p>Please enter a valid address.</p> }
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;