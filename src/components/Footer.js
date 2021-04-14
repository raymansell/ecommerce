import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import '../assets/styles/components/Footer.css';
import logo from '../assets/static/logo.svg';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <Link to='/'>
          <div className='logo'>
            <img src={logo} alt='three dots' />
            <p className='brand'>lozzby</p>
          </div>
        </Link>
        <div className='made-by'>
          <a href='https://github.com/raymansell' target='_blank'>
            Raymond Mansell
          </a>
          <a href='https://github.com/raymansell' target='_blank'>
            <FaGithub className='github-icon' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
