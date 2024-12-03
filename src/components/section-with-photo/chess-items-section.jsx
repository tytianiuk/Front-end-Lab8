import React from 'react';
import Content from './content';
import ItemsBlock from './items-block';

const ChessItemsSection = () => {
  return (
    <div className='relative mx-48 mb-48 bg-sky-50 grid grid-cols-3 gap-4'>
      <div className='flex flex-col justify-center'>
        <Content
          title={'Best collections of chess items'}
          text={'Designers who are interested creating your style'}
          buttonText={'Shop now'}
          className={'col-span-1 w-4/5 pt-20 place-self-center'}
        />
        <div className='w-1/2 ml-6 pt-20'>
          <img
            src='./images/headband.png'
            alt='Chess Dress'
            className='object-cover'
          />
        </div>
      </div>
      <div className='place-self-center w-full'>
        <img src='/images/woman-with-dress.png' alt='Woman with dress' />
      </div>
      <ItemsBlock />
    </div>
  );
};

export default ChessItemsSection;
