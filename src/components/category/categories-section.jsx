import React from 'react';
import SectionTitle from '../ui/section-title';
import Categories from './categories';

const CategoriesSection = () => {
  return (
    <div className='relative bg-white flex flex-col items-center mb-48'>
      <SectionTitle className={'pb-12'}>Shop by Category</SectionTitle>
      <Categories />
    </div>
  );
};

export default CategoriesSection;
