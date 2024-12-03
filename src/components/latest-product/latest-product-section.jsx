import React from 'react';
import SectionTitle from '../ui/section-title';
import { navBarLatestProduct } from '../../constants/nav-bars';
import NavBar from '../header/nav-bar';
import { productList } from '../../constants/product-list';
import Product from './product';

const LatestProductSection = () => {
  return (
    <div className='mx-[200px] mb-48 bg-white flex flex-col'>
      <div className=' grid grid-cols-4'>
        <SectionTitle className={'col-span-2 pb-0'}>
          Latest Product
        </SectionTitle>
        <NavBar
          items={navBarLatestProduct}
          className={
            'col-start-4 flex justify-between items-end text-gray-600 text-xl'
          }
        />
        <hr className='col-span-4 my-5 bg-gray-300 h-[2px]' />
      </div>
      <div className='grid grid-cols-3 gap-5 place-items-center font-merriweather'>
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProductSection;
