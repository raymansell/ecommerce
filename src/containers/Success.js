import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>Thank you for your purchase!</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className='Success-map'>Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
