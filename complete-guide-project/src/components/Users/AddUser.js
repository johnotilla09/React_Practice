import React from "react";
import { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredFirstname, setEnteredFirstname] = useState('');
    const [enteredLastname, setEnteredLastname] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredFirstname.trim().length === 0 || enteredLastname.trim().length === 0 || enteredAddress.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name, age and address (non-empty values).'
            });
            return;
        }

        if (enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age greater zero (0).'
            });
            return;
        }

        props.onAddUser(enteredFirstname, enteredLastname,enteredAddress,enteredAge);

        setEnteredFirstname('');
        setEnteredLastname('');
        setEnteredAddress('');
        setEnteredAge('');
    };

    const firstnameChangeHandler = (event) => {
        setEnteredFirstname(event.target.value);
    };

    const lastnameChangeHandler = (event) => {
        setEnteredLastname(event.target.value);
    };

    const addressChangeHandler = (event) => {
        setEnteredAddress(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
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
                  value={enteredFirstname}
                  onChange={firstnameChangeHandler}
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  type="text"
                  value={enteredLastname}
                  onChange={lastnameChangeHandler}
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
                  value={enteredAddress}
                  onChange={addressChangeHandler}
                />
              </div>
            </div>
            <div className={`${styles["age"]}`}>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="text"
                  value={enteredAge}
                  onChange={ageChangeHandler}
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