// 'use client';
import { Product } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import Card from './Card';

const ProductItem = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} product={product } />
      ))}
    </>
  );
};

export default ProductItem;
