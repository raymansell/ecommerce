import Product from './Product';
// import '../styles/components/Products.css';

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
};

export default Products;
