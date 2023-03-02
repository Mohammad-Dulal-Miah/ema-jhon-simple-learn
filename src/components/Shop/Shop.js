import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

   const [products, setProducts] = useState([]);
   const [selectedProduct, setSelectedProduct] = useState([]);

   useEffect(() => {

      fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => alert(err))

   }, [])


   const handleAddToCart = (product) => {

      setSelectedProduct([...selectedProduct, product]);

   }


   return (
      <div className='shop-container'>
         <div className='products-container'>
            {
               products.map(product => <Product product={product}
                  handleAddToCart={handleAddToCart}
                  key={product.id}></Product>)
            }
         </div>
         <div className='cart-container'>
            <h1>Order summary</h1>
            <h3>Selected Product: {selectedProduct.length}</h3>
         </div>
      </div>
   );
};

export default Shop;