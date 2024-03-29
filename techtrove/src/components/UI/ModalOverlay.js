import React from "react";

import styles from './ModalOverlay.module.css'

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};

export default ModalOverlay;