import React from 'react';

const NavBar = ({ items, className }) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <a key={item.id} className='relative hover:underline' href='#'>
          {item.name}
          {item.count > 0 && (
            <span className='absolute bottom-2 left-10 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center'>
              {item.count}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
