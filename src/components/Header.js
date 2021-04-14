import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo.svg';

const Header = () => {
  const {
    state: { cart },
  } = useAppContext();

  const amount = cart.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <header className='header-container'>
      <div className='header-content'>
        <Link to='/'>
          <div className='logo'>
            <img src={logo} alt='three dots' />
            <p className='brand'>lozzby</p>
          </div>
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
