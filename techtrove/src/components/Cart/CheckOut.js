import React from "react";

import styles from './CheckOut.module.css';

const CheckOut = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={confirmHandler}>
            <div className={StyleSheet.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div className={StyleSheet.control}>
                <label htmlFor="name">Postal Code</label>
                <input type="text" id="name" />
            </div>
            <div className={StyleSheet.control}>
                <label htmlFor="name">Muicipality</label>
                <input type="text" id="name" />
            </div>
            <div className={StyleSheet.control}>
                <label htmlFor="name">Address</label>
                <input type="text" id="name" />
            </div>
            <div className={StyleSheet.control}>
                <label htmlFor="name">Zone</label>
                <input type="text" id="name" />
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confrm</button>
        </form>
    )
};

export default CheckOut;