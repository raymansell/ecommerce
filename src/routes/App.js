import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Home,
  Checkout,
  Information,
  Payment,
  Success,
  NotFound,
} from '../containers';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/checkout/information'>
            <Information />
          </Route>
          <Route exact path='/checkout/payment'>
            <Payment />
          </Route>
          <Route exact path='/checkout/success'>
            <Success />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
