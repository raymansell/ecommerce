import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const {
    state: { cart },
  } = useAppContext();

  const amount = cart.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <header className='header-container'>
      <div className='header-content'>
        <Link to='/'>
          <div className='logo'>Logo</div>
        </Link>
        <nav className='nav'>
          <ul>
            <li className='shop-link'>
              <Link to='/'>shop</Link>
            </li>
            <li className='cart-link'>
              <Link to='/checkout'>
                <FiShoppingCart className='cart-icon' />
                {amount > 0 && (
                  <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
