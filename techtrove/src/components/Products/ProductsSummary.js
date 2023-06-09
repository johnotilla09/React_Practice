import React from "react";

import styles from './ProductsSummary.module.css';

const ProductsSummary = (props) => {
 return (
    <div className={styles.summary}>
        <h2>Cutting-Edge Tech, Delivered to You</h2>
        <p>Choose your desired computer parts and accessories from our extensive selection and elevate your tech experience at home.</p>
        <p>Experience the convenience of having your tech cravings satisfied with TechTrove – where passion meets technology!</p>
    </div>
 );
};

export default ProductsSummary;