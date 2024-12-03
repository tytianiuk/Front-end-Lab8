import React from 'react';
import { navBarWhite } from '../../constants/nav-bars';
import NavBar from './nav-bar';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';
import Button from '../ui/button';

const SecondBlockHeader = () => {
  return (
    <div className='bg-white grid grid-cols-5 gap-4 items-center w-full py-4'>
      <div className='col-span-1 ml-6 text-2xl font-bold'>Chesshop</div>
      <NavBar
        items={navBarWhite}
        className={'col-span-2 flex w-full justify-around'}
      />
      <div className='col-span-2 flex justify-end'>
        <div className=' pr-6 items-center w-full xl:w-7/10 2xl:w-4/5 flex justify-around'>
          <span className='relative flex items-center'>
            <input
              type='search'
              placeholder='Search product'
              className='border-2 border-gray-300 rounded-full p-3 pl-8 text-center focus:outline-none focus:ring-0'
            />
            <i className='fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
          </span>
          <HeartIcon />
          <CartIcon />
          <Button
            className={'bg-blue-500 hover:bg-blue-600 active:bg-blue-800'}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondBlockHeader;
