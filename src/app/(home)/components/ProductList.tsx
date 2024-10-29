import React from 'react';
import ProductItem from './ProductItem';

const ProductList = async () => {
  const result = await fetch('https://fakestoreapi.com/products');

  if (!result.ok) {
    throw new Error('Occur occured while fetching data');
  }
  const products = await result.json();
  console.log(products);
  return (
    <div className="container bg-pink-300 mx-auto mt-8">
      <ProductItem products={products} />
    </div>
  );
};

export default ProductList;
