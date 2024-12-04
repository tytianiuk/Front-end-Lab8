import React from 'react';
import Button from './ui/button';

const StartSection = () => {
  return (
    <div className='relative mb-32 lg:mb-24 2xl:mb-48 pt-16 lg:pt-24 bg-blue-100 flex items-center justify-center'>
      <div className='w-2/5 h-full'>
        <img
          src='./images/first-section.png'
          alt='Magnus Carlsen'
          className='w-full bottom-0 left-0'
        />
      </div>
      <div className='w-3/5 pl-6 lg:pl-24 lg:pl-36 xl:pl-48 '>
        <div className='flex flex-col justify-center items-start pb-6'>
          <div className='font-mvboli italic text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-blue-500 '>
            60% Discount
          </div>
          <div className='font-merriweather text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-gray-900'>
            <div>Magnus</div>
            <div>Collection</div>
          </div>
          <div className='my-4 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 italic'>
            Best chess collection in 2024!
          </div>
        </div>
        <Button
          className={
            'bg-blue-500 hover:bg-blue-600 active:bg-blue-800 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'
          }
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default StartSection;
