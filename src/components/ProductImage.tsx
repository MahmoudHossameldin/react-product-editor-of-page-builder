import React from 'react';
import { useAppSelector } from '../store';
import Type from './Type';

function ProductImage() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='max-h-[18.75rem] overflow-hidden flex justify-center items-center relative'>
      {data && (
        <>
          <Type />
          <img
            src={data.picture}
            alt='product'
            className='w-full h-full object-contain object-center min-h-[7rem]'
          />
        </>
      )}
    </div>
  );
}

export default ProductImage;
