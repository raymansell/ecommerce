import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import '../styles/components/Header.css';

const Header = () => {
  return (
    // <div className='Header'>
    //   <Link to='/'>
    //     <h1 className='Header-title'>Ecommerce Site</h1>
    //   </Link>
    //   <div className='Header-checkout'>
    //     <Link to='/checkout'>
    //       <i className='fas fa-shopping-basket' />
    //     </Link>
    //   </div>
    // </div>
    <header className='header-container'>
      <div className='header-content'>
        <Link to='/'>
          <div className='logo'>Logo</div>
        </Link>
        <nav className='nav'>
          <ul>
            <li>
              <Link to='/' className='shop-link'>
                shop
              </Link>
            </li>
            <li>
              <Link to='/checkout'>
                <FiShoppingCart className='cart-icon' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
