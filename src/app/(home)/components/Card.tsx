import React from 'react'
import { Product } from '@/types/types';
import Link from 'next/link';


const Card = ({product}:{product:Product}) => {
  return (
    <article className='flex gap-4 border border-white'>
      <div>Image</div>
      <div>
        <p>{product.title}</p>
        <p>{product.category}</p>
        <Link href={'/'} className='bg-primary-500 p-2 rounded-sm text-white hover:text-primary-500 hover:bg-white hover:border hover:border-primary-500'>Read More</Link>
      </div>
    </article>
  )
}

export default Card