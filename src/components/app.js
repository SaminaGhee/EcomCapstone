import React, { useState } from 'react';
import '../style/app.css'; // CSS file
import Carousel from './carousel.js'; // Carousel component

const App = () => {
  const [cart, setCart] = useState([]);

  const images = [
    { src: 'images/classic fringe.png', alt: 'Product 1', price: 55 },
    { src: 'images/boho fringe.png', alt: 'Product 2', price: 50 },
    { src: 'images/bobbles.png', alt: 'Product 3', price: 45 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <div className="container">
      <h1>PillowLove</h1>
      <Carousel images={images} addToCart={addToCart} />
      <h2>Products</h2>
      <div className="product-container">
        {images.map((product, index) => (
          <div key={index} className='product'>
            <img src={product.src} alt={product.alt} />
            <p>{product.alt} - ${product.price}</p>
            <button onClick={() => addToCart(product)}> Add to Cart</button>
            </div>
        ))}
      </div>
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.alt} - ${item.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default App;