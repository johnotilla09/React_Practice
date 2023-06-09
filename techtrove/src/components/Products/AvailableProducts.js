import React from "react";

import Card from "../UI/Card";
import ProductsItem from "./ProductsItem/ProductsItem";

import styles from './AvailableProducts.module.css';

const DUMMY_PRODUCTS = [
    {
    id: 'p1',
    name: 'Graphics Card',
    description: 'Powerful graphics processing unit',
    price: 499.99,
    },
    {
    id: 'p2',
    name: 'CPU',
    description: 'High-performance central processing unit',
    price: 349.99,
    },
    {
    id: 'p3',
    name: 'RAM Kit',
    description: 'Fast and reliable memory modules',
    price: 149.99,
    },
    {
    id: 'p4',
    name: 'SSD',
    description: 'High-speed solid-state drive',
    price: 129.99,
    },
];

const AvailableProducts = (props) => {
    const productsList = DUMMY_PRODUCTS.map((product) => (
      <ProductsItem
        key={product.id}
        product={product}
      />
    ));

    return (
      <div className={styles.products}>
        <Card>
          <ul>{productsList}</ul>
        </Card>
      </div>
    );
};

export default AvailableProducts;