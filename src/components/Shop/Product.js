import { useAppContext } from '../../context/AppContext';
import '../../styles/components/Product.css';

const Product = ({ id, image, title, price, description }) => {
  const {
    state: { cart },
    addItemToCart,
  } = useAppContext();

  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => {
    addItemToCart({ id, image, title, price, amount: 1 });
  };

  return (
    <div className='product-card'>
      <div className='img-container'>
        <img
          // src='https://assets.products-live.ao.com/Images/6a683729-47cd-4078-8f3c-3e7acf16eeab/520x520/508337_sennheiser_headphones_01.png'
          src={image}
          alt={title}
        />
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
