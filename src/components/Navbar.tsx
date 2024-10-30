import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='border-b-2 border-primary-500 py-1'>
      <nav className="flex justify-between container mx-auto items-center">
        <Link href={'/' } className="flex items-center gap-2">
          <div className="bg-primary-500 flex justify-center items-center w-10 h-10 rounded-3xl m-2 ">
            <BookIcon />
          </div>
          <p className="text-primary-500 font-bold text-lg uppercase">
            Coders Products
          </p>
        </Link>
        <div className="flex gap-4">
          <button className="rounded-md w-20 h-8 font-bold bg-white border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">
            Sign in
          </button>
          <button className="bg-primary-500 w-20 h-8 rounded-md text-white font-bold hover:bg-white hover:text-primary-500 hover:border hover:border-primary-500">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#ce7041"
    className="w-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);
