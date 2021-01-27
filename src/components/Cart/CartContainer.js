import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import CartItem from './CartItem';
import '../../styles/components/CartContainer.css';

const CartContainer = () => {
  const {
    state: { cart },
  } = useAppContext();

  const getTotalPrice = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.price * curr.amount;
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {/* cart items */}
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${`${getTotalPrice()}`}</span>
          </h4>
        </div>
        <Link to='/checkout/information'>
          <button type='button' className='btn-continue-order'>
            continue order
          </button>
        </Link>
      </footer>
    </section>
  );
};

export default CartContainer;
