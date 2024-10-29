import React from 'react'
import { Product } from '@/types/types';


const Card = ({product}:{product:Product}) => {
  return (
    <div>{product.title }</div>
  )
}

export default Card