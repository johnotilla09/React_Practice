import React from "react";

import Button from "../Button/Button";

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} />
            <div className={`${styles['modal']} ${styles['card']}`}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button className={styles.button}>Okay</Button>
                </footer>
            </div>
        </div>
    );
};

export default ErrorModal;