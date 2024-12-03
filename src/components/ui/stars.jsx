import React from 'react';

const Stars = ({ rating }) => {
  return (
    <div className='flex justify-center my-3'>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          stroke={index < rating ? '#f3c01f' : '#d9d9d8'}
          strokeWidth='2'
          viewBox='0 0 24 24'
          className='w-6 h-6 mx-[2px]'
        >
          <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
        </svg>
      ))}
    </div>
  );
};

export default Stars;
