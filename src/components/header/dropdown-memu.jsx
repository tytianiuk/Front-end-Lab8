import React from 'react';

const DropdownMenu = ({ items, isOpen }) => {
  return (
    isOpen && (
      <div className='absolute top-12 left-0 bg-white shadow-lg rounded-lg w-48 z-10'>
        {items.map((item) => (
          <a
            key={item.id}
            className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-200'
            href='#'
          >
            {item.name}
            {item.count > 0 && (
              <span className='ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center'>
                {item.count}
              </span>
            )}
          </a>
        ))}
      </div>
    )
  );
};

export default DropdownMenu;
