import { useParams } from "react-router-dom";

const ProductsDetails = () => {
    const params = useParams();

    return (
        <section>
            <h1>Products Details</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductsDetails;