import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import CartContainer from '../components/Cart/CartContainer';

const Checkout = () => {
  return (
    <>
      {/* <div className='Checkout'>
        <div className='Checkout-content'>
          <h3>Product list</h3>
          <div className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>Item name</h4>
              <span>$10</span>
            </div>
            <button type='button'>borrar</button>
          </div>
        </div>
        <div className='Checkout-sidebar'>
          <h3>Total: $10</h3>
          <Link to='/checkout/information'>
            <button type='submit'>Continue Order</button>
          </Link>
        </div>
      </div> */}
      <CartContainer />
    </>
  );
};

export default Checkout;
