import React from 'react';
import Stars from '../ui/stars';

const Product = ({ product }) => {
  return (
    <div key={product.id} className='relative m-5 cursor-pointer'>
      <div className={`bg-neutral-200 rounded-xl`}>
        <img src={product.image} alt={product.name} className='object-cover' />
      </div>
      <Stars rating={product.rating} />
      <div className='text-center text-2xl'>{product.name}</div>
      <div className='text-center mt-2 font-bold text-3xl'>
        <span className='mr-2'>${product.discountedPrice}</span>
        <span className='ml-2 text-red-500 line-through'>
          ${product.originalPrice}
        </span>
      </div>
      {product.new && (
        <span className='absolute top-5 left-5 px-3 bg-red-500 text-white text-xl rounded-2xl flex items-center justify-center font-comfortaa'>
          New
        </span>
      )}
    </div>
  );
};

export default Product;
