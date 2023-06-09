import React, { Fragment } from "react";
import ReactDOM from 'react-dom';

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

// import styles from './Modal.module.css'

// const Backdrop = (props) => {
//     return <div className={styles.backdrop}></div>
// };

// const ModalOverlay = (props) => {
//     return (
//         <div className={styles.Modal}>
//             <div>{props.children}</div>
//         </div>
//     );
// };

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        // <Fragment>
        //     {}
        //     {}
        // </Fragment>
      <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
      </Fragment>
    );
};

export default Modal;