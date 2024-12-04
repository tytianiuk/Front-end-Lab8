import React from 'react';
import SectionTitle from '../ui/section-title';
import Button from '../ui/button';

const Content = ({ title, text, buttonText, className }) => {
  return (
    <div className={className}>
      <SectionTitle className={'text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl'}>
        {title}
      </SectionTitle>
      <div className='text-md sm:text-xl lg:text-2xl 2xl:text-2xl pt-2 pb-3 sm:pt-6 sm:pb-8 lg:pb-16'>
        {text}
      </div>
      <div className='flex flex-collumn items-center justify-between'>
        <Button
          className={
            'bg-slate-900 hover:bg-black md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'
          }
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Content;
