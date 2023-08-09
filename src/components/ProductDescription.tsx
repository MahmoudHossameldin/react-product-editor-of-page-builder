import React from 'react';
import { useAppSelector } from '../store';
import DOMPurify from 'dompurify';

function ProductDescription() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='p-5'>
      <h1 className='font-semibold'>{data?.name}</h1>
      {data?.description && (
        <p
          className='text-greyText text-[.875rem] leading-6 mt-[.625rem]'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.description),
          }}
        />
      )}
    </div>
  );
}

export default ProductDescription;
