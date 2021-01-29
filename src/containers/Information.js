import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    setBuyer,
  } = useAppContext();
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apt: formData.get('apt'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      zipcode: formData.get('zipcode'),
      phone: formData.get('phone'),
    };
    setBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Contact Information:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Full name' name='name' />
            <input type='text' placeholder='Email' name='email' />
            <input type='text' placeholder='Address' name='address' />
            <input type='text' placeholder='Apt' name='apt' />
            <input type='text' placeholder='City' name='city' />
            <input type='text' placeholder='Country' name='country' />
            <input type='text' placeholder='State' name='state' />
            <input type='text' placeholder='Zipcode' name='zipcode' />
            <input type='text' placeholder='Phone number' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <Link to='/checkout'>
            <div className='Information-back'>Go back</div>
          </Link>

          <div className='Information-next'>
            <button type='button' onClick={handleSubmit}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Order:</h3>
        {cart.map((item) => (
          <div key={item.id} className='Information-item'>
            <div className='Information-element'>
              <h4>
                {item.title} <small>&times; {item.amount}</small>
              </h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
