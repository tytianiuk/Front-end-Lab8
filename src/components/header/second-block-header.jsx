import React from 'react';
import { navBarWhite } from '../../constants/nav-bars';
import NavBar from './nav-bar';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';
import Button from '../ui/button';

const SecondBlockHeader = () => {
  return (
    <div className='bg-white grid grid-cols-6 2xl:grid-cols-7 lg:gap-4 items-center w-full py-4'>
      <div className='col-span-1 ml-4 lg:ml-6 text-xl lg:text-2xl font-bold'>
        Chesshop
      </div>
      <NavBar
        items={navBarWhite}
        className={
          'col-span-1 xl:col-span-2 2xl:col-span-3 flex w-full justify-around'
        }
        menu={true}
      />
      <div className='col-span-4 xl:col-span-3 flex '>
        <div className='lg:pr-6 items-center w-full flex justify-around'>
          <input
            type='search'
            placeholder='Search product'
            className='w-2/5 border-2 border-gray-300 rounded-full p-3  text-center focus:outline-none focus:ring-0'
          />
          <HeartIcon />
          <CartIcon />
          <Button
            className={
              'bg-blue-500 hover:bg-blue-600 active:bg-blue-800 xl:text-xl'
            }
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondBlockHeader;
