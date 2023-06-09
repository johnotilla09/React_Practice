import React from "react";

import styles from './ProductsItem.module.css';

const ProductsItem = (props) => {
    const price = `$${props.product.price.toFixed(2)}`;

    return (
      <li className={styles.meal}>
        <div>
            <h3>{props.product.name}</h3>
          <div className={styles.description}>{props.product.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>

        </div>
      </li>
    );
};

export default ProductsItem;