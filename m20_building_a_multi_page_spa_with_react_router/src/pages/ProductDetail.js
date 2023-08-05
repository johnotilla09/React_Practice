import React, { Fragment } from "react";
import { useParams } from 'react-router-dom';

const ProductDeatil = (props) => {
    const params = useParams();

    console.log(params.productId);

    return (
        <Fragment>
            <h1>Product Details</h1>
            <p>{ params.productId }</p>
        </Fragment>
    );
};

export default ProductDeatil;