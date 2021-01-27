import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <Link to='/'>
          <div className='logo'>Logo</div>
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
