import React from 'react';
import { Product } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ product }: { product: Product }) => {
  return (
    <article className="border border-white p-4 shadow-md flex gap-6 items-center rounded-md">
      <div className="w-1/2">
        <Image
          src={product.image}
          alt={product.title}
          width={0}
          height={0}
          style={{ width: '100%', height: '17rem' }}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <p className="line-clamp-2 font-bold text-primary-700">{product.title}</p>
        <p className='capitalize text-primary-900 font-bold'>{product.category}</p>
        <Link
          href={`/product/${product.id}`}
          className="bg-primary-500 p-2 rounded-sm text-white hover:text-primary-500 hover:bg-white hover:border hover:border-primary-500 max-w-28"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default Card;
