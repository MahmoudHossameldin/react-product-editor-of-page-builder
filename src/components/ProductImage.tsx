import React from 'react';
import { useAppSelector } from '../store';
import typeicon from '../assets/type.svg';

function ProductImage() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='max-h-[18.75rem] overflow-hidden flex justify-center items-center relative'>
      {data && (
        <>
          <div className='absolute top-0 left-0 bg-white flex rounded-tl-md rounded-br-md'>
            <div className='bg-blue rounded-br-md rounded-tl-md h-10 w-10 grid justify-center content-center'>
              <img src={typeicon} alt={data.type.name} />
            </div>
            <div className='py-[.5625rem] px-[.625rem] font-semibold h-10 flex items-center'>
              {data.type.name}
            </div>
          </div>
          <img
            src={data.picture}
            alt='product'
            className='w-full h-full object-contain object-center'
          />
        </>
      )}
    </div>
  );
}

export default ProductImage;
