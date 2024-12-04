import React, { useState } from 'react';
import DropdownMenu from './dropdown-memu';
const NavBar = ({ items, className, isCollapsible = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${isCollapsible ? 'hidden xl:flex' : 'flex'} ${className}`}
      >
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

      {isCollapsible && (
        <div className='xl:hidden flex justify-center'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='py-3 px-5 lg:px-10 border-2 border-gray-300 rounded-full'
          >
            Menu
          </button>
          <DropdownMenu items={items} isOpen={isOpen} />
        </div>
      )}
    </>
  );
};

export default NavBar;
