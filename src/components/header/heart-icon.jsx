const HeartIcon = () => (
  <span className='relative p-3 border-2 border-gray-300 rounded-full'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z'
      />
    </svg>
    <span className='absolute bottom-5 left-10 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center'>
      7
    </span>
  </span>
);

export default HeartIcon;
