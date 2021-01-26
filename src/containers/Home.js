import initialState from '../initialState';
import Products from '../components/Shop/Products';
import '../styles/components/Home.css';

const Home = () => {
  return (
    <main className='products-grid'>
      <Products products={initialState.products} />
    </main>
  );
};

export default Home;
