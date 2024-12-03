import React from 'react';
import SectionTitle from '../ui/section-title';
import Button from '../ui/button';

const Content = ({ children, title, text, buttonText, className }) => {
  return (
    <div className={className}>
      <SectionTitle>{title}</SectionTitle>
      <div className='text-xl pt-6 pb-16'>{text}</div>
      <div className='flex flex-collumn items-center justify-between'>
        <Button className={'bg-slate-900 hover:bg-black'}>{buttonText}</Button>
        {children}
      </div>
    </div>
  );
};

export default Content;
