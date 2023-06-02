import React from "react";
import { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredFirstname, setEnteredFirstname] = useState('');
    const [enteredLastname, setEnteredLastname] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredFirstname.trim().length === 0 || enteredLastname.trim().length === 0 || enteredAddress.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (enteredAge < 1) {
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
    
    return (

        <div>
            <ErrorModal title="An Error Occured" message="Something went wrong!" />
            <Card>
                <h2>Add User</h2>
                <form onSubmit={addUserHandler}>
                    <div className={`${styles['names']}`}>
                        <div className={`${styles['form-group']} ${styles['firstname']}`}>
                            <input type="text" value={enteredFirstname} onChange={firstnameChangeHandler} />
                        </div>
                        <div className={`${styles['form-group']} ${styles['lastname']}`}>
                            <input type="text" value={enteredLastname} onChange={lastnameChangeHandler} />
                        </div>
                    </div>
                    <div className={`${styles['address']}`}>
                        <div className={`${styles['form-group']} ${styles['home-address']}`}>
                            <input type="text" value={enteredAddress} onChange={addressChangeHandler} />
                        </div>
                    </div>
                    <div className={`${styles['age']}`}>
                        <div className={`${styles['form-group']} ${styles['user-age']}`}>
                            <input type="text" value={enteredAge} onChange={ageChangeHandler} />
                        </div>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    );
};

export default AddUser;