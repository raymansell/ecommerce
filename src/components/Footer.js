import { FaGithub } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    // <div className='Footer'>
    //   <div className='Footer-title'>Ecommerce Site</div>
    //   <div className='Footer-copy'>All rights reserved</div>
    // </div>
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='logo'>Logo</div>
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
