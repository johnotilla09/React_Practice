import React from "react";
import ReactDOM from "react-dom";

import Button from "../Button/Button";

import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={`${styles['modal']} ${styles['card']}`}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button className={styles.button} onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
    );
};

const ErrorModal = (props) => {
    return (
        // React DOM portal
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById("overlay-root")
        )}
      </React.Fragment>
      // React DOM portal
    );
};

export default ErrorModal;