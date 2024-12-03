import React from 'react';
import { items } from '../../constants/items';

const ItemsBlock = () => {
  return (
    <div className='flex flex-col justify-end text-2xl font-mvboli font-bold'>
      {items.map((item) => (
        <div key={item.id} className='flex  items-center'>
          <div
            className={`w-1/2 h-3/5 ${item.bgColor} ${item.textColor} rounded-xl content-center text-end py-2 pr-3 mr-3 transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            {item.text}
          </div>
          <div className='w-1/3'>
            <img src={item.imgSrc} alt='Item' className='object-cover' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsBlock;
