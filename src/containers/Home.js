// import initialState from '../initialState';
import Products from '../components/Shop/Products';
import { useAppContext } from '../context/AppContext';
import '../assets/styles/components/Home.css';

const Home = () => {
  const {
    state: { products },
  } = useAppContext();

  return (
    <main className='products-grid'>
      <Products products={products} />
    </main>
  );
};

export default Home;
