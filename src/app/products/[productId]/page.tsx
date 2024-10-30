// 'use client';

// import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const Singleproduct = async ({ params }: { params: { productId: string } }) => {
  let productId = params.productId;

  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (!response.ok) {
    throw new Error('Occur occured while fetching data');
  }

  const prouductData = await response.json();
  console.log(prouductData);

  return (
    <div className="container mx-auto flex flex-col  md:flex-row justify-between items-center gap-4 md:my-8 border border-primary-800 md:p-8">
      <div className="md:w-1/2 flex flex-col gap-4">
        {/* <h1>{`SKU ${params.productId}`}</h1> */}
        <p className="font-bold text-primary-700">{prouductData.title}</p>
        <p className="mt-2">{prouductData.description}</p>
        <div>
          <button className="px-4 py-2 mt-2 rounded-md text-white bg-primary-500 hover:border hover:bg-white hover:border-primary-500 hover:text-black">
            Download
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src={prouductData.image}
          alt={prouductData.category}
          width={0}
          height={0}
          style={{ width: 'auto', height: '15rem' }}
          sizes="100vw"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Singleproduct;
