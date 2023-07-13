import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducts = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 9,
    title: 'Cinderela',
    description: 'The sleeping beauty'
  }
];

const Products = (props) => {
  const product = DummyProducts.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { product }
      </ul>
    </section>
  );
};

export default Products;
