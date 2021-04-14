import { useAppContext } from '../../context/AppContext';
import '../../assets/styles/components/Product.css';

const Product = ({ id, image, title, price, brand }) => {
  const {
    state: { cart },
    addItemToCart,
  } = useAppContext();

  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => {
    addItemToCart({ id, image, title, price, amount: 1 });
  };

  return (
    <div className='product-card' data-content={brand}>
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div className='product-info'>
        <h3>{title}</h3>
        <h2 className='product-price'>
          ${price}
          <small>{''}</small>
        </h2>
        <button className='buy' onClick={handleClick} disabled={isInCart}>
          {isInCart ? 'in cart' : 'add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
