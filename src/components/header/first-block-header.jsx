import React from 'react';
import { navBarBlack } from '../../constants/nav-bars';
import NavBar from './nav-bar';

const FirstBlockHeader = () => {
  return (
    <div className='bg-black grid grid-cols-6 gap-4 py-4 text-white'>
      <div className='col-span-2 pl-6 flex w-full'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png'
          alt='USA Flag'
          className='w-10 h-6'
        />
        <span className='px-5'>USA</span>
        <span className='hidden md:inline'>+777 2345 7886</span>
      </div>
      <NavBar
        items={navBarBlack}
        className={'col-start-3 col-end-7 flex w-full justify-around'}
        isCollapsible={false}
      />
    </div>
  );
};

export default FirstBlockHeader;
