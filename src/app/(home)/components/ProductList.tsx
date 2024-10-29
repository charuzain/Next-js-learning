import React from 'react';
import ProductItem from './ProductItem';

const ProductList = async () => {
  const result = await fetch('https://fakestoreapi.com/products');

  if (!result.ok) {
    throw new Error('Occur occured while fetching data');
  }
  const products = await result.json();
  // console.log(products);
  return (
    <div className="container mx-auto mt-10 md:grid grid-cols-3 gap-x-8 gap-y-8">
      <ProductItem products={products} />
    </div>
  );
};

export default ProductList;
