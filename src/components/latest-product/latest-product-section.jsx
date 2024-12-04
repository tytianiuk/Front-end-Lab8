import React from 'react';
import SectionTitle from '../ui/section-title';
import { navBarLatestProduct } from '../../constants/nav-bars';
import NavBar from '../header/nav-bar';
import { productList } from '../../constants/product-list';
import Product from './product';

const LatestProductSection = () => {
  return (
    <div className='mx-4 md:mx-16 lg:mx-24 xl:mx-36  2xl:mx-48 mb-24 xl:mb-48 bg-white flex flex-col'>
      <div className='grid grid-cols-5 sm:grid-cols-4'>
        <SectionTitle
          className={
            'col-span-2 pb-0 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
          }
        >
          Latest Product
        </SectionTitle>
        <NavBar
          items={navBarLatestProduct}
          className={
            'col-span-3 sm:col-span-2 xl:col-start-4 flex justify-around xl:justify-between items-end text-gray-600 sm:text-lg'
          }
          isCollapsible={false}
        />
        <hr className='col-span-5 my-5 bg-gray-300 h-[2px]' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center font-merriweather'>
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProductSection;
