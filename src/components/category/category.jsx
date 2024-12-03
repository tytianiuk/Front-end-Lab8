import React from 'react';
import CardTitle from './category-title';
import NewCollection from './new-collection';

const Category = ({ title, newCollection, discount, bgColor, src }) => {
  return (
    <div
      className={`relative max-w-[500px] max-h-[250px] ${bgColor} grid grid-cols-2 text-2xl rounded-xl content-center cursor-pointer`}
    >
      <div className='px-4'>
        <img src={src} alt='Chess Set' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col justify-center'>
        {discount && (
          <div className='absolute mt-[-95px] font-mvboli italic font-bold text-blue-500'>
            Discount!
          </div>
        )}
        <CardTitle>{title}</CardTitle>
        {discount && (
          <span className='font-merriweather italic'>New Collection</span>
        )}
        {newCollection && <NewCollection />}
      </div>
    </div>
  );
};

export default Category;
