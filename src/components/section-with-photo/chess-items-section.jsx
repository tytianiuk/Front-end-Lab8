import React from 'react';
import Content from './content';
import ItemsBlock from './items-block';

const ChessItemsSection = () => {
  return (
    <div className='relative xl:mx-16 mb-16 lg:mb-24 2xl:mb-32 bg-sky-50 grid grid-cols-3'>
      <div className='w-full flex flex-col justify-center col-span-2 xl:col-span-1'>
        <Content
          title={'Best collections of chess items'}
          text={'Designers who are interested creating your style'}
          buttonText={'Shop now'}
          className={'ml-12'}
        />
      </div>
      <div className='w-full'>
        <img
          src='./images/woman-with-dress.png'
          alt='Woman with dress'
          className='mx-auto'
        />
      </div>
      <ItemsBlock />
    </div>
  );
};

export default ChessItemsSection;
