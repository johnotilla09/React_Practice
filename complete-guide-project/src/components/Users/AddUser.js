import React from "react";
import { useState, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const firstnameInputRef = useRef();
    const lastnameInputRef = useRef();
    const addressInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredFirstname, setEnteredFirstname] = useState('');
    // const [enteredLastname, setEnteredLastname] = useState('');
    // const [enteredAddress, setEnteredAddress] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        // Using refs rather done useState
        const enteredUserFirstname = firstnameInputRef.current.value;
        const enteredUserLastname = lastnameInputRef.current.value;
        const enteredUserAddress = addressInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;


        if (enteredUserFirstname.trim().length === 0 || enteredUserLastname.length === 0 || enteredUserAddress.length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name, age and address (non-empty values).'
            });
            return;
        }

        if (enteredUserAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age greater zero (0).'
            });
            return;
        }

        props.onAddUser(enteredUserFirstname, enteredUserLastname,enteredUserAddress,enteredUserAge);

        firstnameInputRef.current.value = '';
        lastnameInputRef.current.value = '';
        addressInputRef.current.value = '';
        ageInputRef.current.value = '';
    };
    
    const errorHandler = (props) => {
        setError(null);
    }
    
    return (
      <Wrapper>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <Card>
          <h2>Add User</h2>
          <form onSubmit={addUserHandler}>
            <div className={`${styles["names"]}`}>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  // value={enteredFirstname}
                  // onChange={firstnameChangeHandler}
                  ref={firstnameInputRef}
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  type="text"
                  // value={enteredLastname}
                  // onChange={lastnameChangeHandler}
                  ref={lastnameInputRef}
                />
              </div>
            </div>
            <div className={`${styles["address"]}`}>
              <div
                className={`${styles["form-group"]}`}
              >
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  // value={enteredAddress}
                  // onChange={addressChangeHandler}
                  ref={addressInputRef}
                />
              </div>
            </div>
            <div className={`${styles["age"]}`}>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="text"
                  // value={enteredAge}
                  // onChange={ageChangeHandler}
                  ref={ageInputRef}
                />
              </div>
            </div>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </Wrapper>
    );
};

export default AddUser;