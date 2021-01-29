import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getTotalPrice } from '../utils';
import '../styles/components/Payment.css';

const Payment = () => {
  const history = useHistory();
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useAppContext();

  const paypalOptions = {
    clientId:
      'ARnlArk_VjSyf0dd06EzLmgr_Ew3OlBTEDsjldLtyAkAS7UcBQbexNyQaCJstPkDGW-INHxk5ALi3gC4',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Order resumen</h3>
        {cart.map((item) => (
          <div key={item.id} className='Payment-item'>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={getTotalPrice(cart)}
            onButtonReady={() => console.log('start payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
