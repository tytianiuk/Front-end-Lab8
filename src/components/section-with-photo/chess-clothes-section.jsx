import React from 'react';
import Content from './content';

const ChessClothesSection = () => {
  return (
    <div className='relative mx-48 mb-48 bg-amber-100 grid grid-cols-3 gap-4'>
      <div className='place-self-center'>
        <img src='./images/girl-with-chess.png' alt='Girl with chess T-shirt' />
      </div>
      <Content
        title={'Find The Best Clothes with Chess from Our Shop'}
        text={'Designers who are interested creating your fashion clothes'}
        buttonText={'Shop now'}
        className={'col-span-2 w-4/5 place-self-center'}
      />
      <div className='absolute right-12 bottom-12 w-1/6'>
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
