import React from 'react';
import { items } from '../../constants/items';

const ItemsBlock = () => {
  return (
    <div className='flex flex-col col-span-3 xl:col-span-1 justify-end text-3xl xl:text-xl font-mvboli font-bold '>
      {items.map((item) => (
        <div
          key={item.id}
          className='flex items-center justify-around xl:justify-normal bg-white xl:bg-sky-50 pt-10 xl:pt-0'
        >
          <div
            className={`w-1/2 h-3/5 ${item.bgColor} ${item.textColor} rounded-xl content-center text-center xl:text-end border-2 border-blue-600 py-2 pr-3 mr-6 transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            {item.text}
          </div>
          <div className='w-1/4 xl:w-1/3'>
            <img src={item.imgSrc} alt='Item' className='object-cover' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsBlock;
