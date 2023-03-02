import React from 'react';
import './Product.css';

const Product = ({ product,handleAddToCart }) => {

   const { name, img, price, ratings, seller } = product;

   return (
      <div className='product'>
         <img src={img} alt="product" />
         <div className='product-description'>
            <p className='product-name'>{name}</p>
            <h5>price: {price}$</h5>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
         </div>

         <button className='btn-cart'
                 onClick={()=> handleAddToCart(product)}>
           Add to cart
         </button>
      </div>
   );
};

export default Product;