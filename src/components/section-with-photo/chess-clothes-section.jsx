import React from 'react';
import Content from './content';

const ChessClothesSection = () => {
  return (
    <div className='relative xl:mx-16 mb-32 lg:mb-24 2xl:mb-48 bg-amber-100 grid grid-cols-3 gap-4'>
      <div className='place-self-center'>
        <img src='./images/girl-with-chess.png' alt='Girl with chess T-shirt' />
      </div>
      <Content
        title={'Find The Best Clothes with Chess from Our Shop'}
        text={'Designers who are interested creating your fashion clothes'}
        buttonText={'Shop now'}
        className={'col-span-2 xl:w-4/5 w-[90%] place-self-center'}
      />
      <div className='absolute right-6 bottom-6 md:right-9 md:bottom-9 xl:right-12 xl:bottom-12 w-1/5 2xl:w-1/6'>
        <img
          src='./images/chess-tshirt.png'
          alt='Chess T-shirt'
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default ChessClothesSection;
