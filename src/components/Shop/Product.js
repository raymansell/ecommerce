import '../../styles/components/Product.css';

const Product = ({ image, title, price, description }) => {
  return (
    // <div className='Products-item'>
    //   <img src={image} alt={title} />
    //   <div className='Product-item-info'>
    //     <h2>
    //       {title}
    //       <span> $ {price}</span>
    //     </h2>
    //     <p>{description}</p>
    //   </div>
    //   <button type='button'>Buy Now</button>
    // </div>
    <div className='product-card'>
      <div className='img-container'>
        <img
          src='https://assets.products-live.ao.com/Images/6a683729-47cd-4078-8f3c-3e7acf16eeab/520x520/508337_sennheiser_headphones_01.png'
          // src={image}
          alt={title}
        />
      </div>
      <div className='product-info'>
        <h3>{title}</h3>
        <h2 className='product-price'>
          ${price}
          <small>{''}</small>
        </h2>
        <a href='http://google.com' className='buy'>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Product;
