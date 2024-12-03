import React from 'react';
import Button from './ui/button';

const StartSection = () => {
  return (
    <div className='relative mb-48 max-h-[1000px] h-[1000px] bg-blue-100 flex items-center justify-center'>
      <div className='w-2/5 h-full relative'>
        <img
          src='./images/first-section.png'
          alt='Magnus Carlsen'
          className='w-full absolute bottom-0 left-0'
        />
      </div>
      <div className='w-3/5'>
        <div className='w-4/5 flex flex-col justify-center items-start  pb-6'>
          <div className='font-mvboli italic text-[48px] font-semibold text-blue-500 '>
            60% Discount
          </div>
          <div className='font-merriweather leading-[120px] text-[120px] font-bold text-gray-900'>
            <div>Magnus</div>
            <div>Collection</div>
          </div>
          <div className='my-4 text-[24px] text-gray-500 italic'>
            Best chess collection in 2024!
          </div>
        </div>
        <Button className={'bg-blue-500 hover:bg-blue-600 active:bg-blue-800'}>
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default StartSection;
