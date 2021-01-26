import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../../styles/components/CartContainer.css';

const CartContainer = () => {
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {/* {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
          Cra 24 # 15 - 41. Apto 304
        })} */}
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$0.00</span>
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
