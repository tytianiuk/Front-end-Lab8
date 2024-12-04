import React from 'react';
import SectionTitle from '../ui/section-title';
import Categories from './categories';

const CategoriesSection = () => {
  return (
    <div className='relative bg-white flex flex-col items-center mb-24 xl:mb-48'>
      <SectionTitle className={'pb-12 text-4xl sm:text-5xl xl:text-6xl'}>
        Shop by Category
      </SectionTitle>
      <Categories />
    </div>
  );
};

export default CategoriesSection;
