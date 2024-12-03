import React from 'react';
import Category from './category';
import { categories } from '../../constants/categories';
const Categories = () => {
  return (
    <div className='grid xl:grid-cols-3 gap-14 mx-24'>
      {categories.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          mark={category.mark}
          newCollection={category.newCollection}
          discount={category.discount}
          bgColor={category.bgColor}
          src={category.src}
        />
      ))}
    </div>
  );
};

export default Categories;
