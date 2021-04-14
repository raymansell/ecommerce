import Header from './Header';
import Footer from './Footer';
import '../assets/styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className='hero'>{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
