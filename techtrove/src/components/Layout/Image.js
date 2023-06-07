import React from "react";

import styles from './Image.module.css';

const Image = (props) => {
    return <div className={`${styles['main-image']}`}>{props.children}</div>
};

export default Image;