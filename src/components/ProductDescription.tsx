import React from 'react';
import DOMPurify from 'dompurify';
import { useAppSelector } from '../store';

function ProductDescription() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='p-5'>
      <h1 className='font-semibold mb-[.625rem]'>{data?.name}</h1>
      {data?.description && (
        <p
          className='text-greyText text-[.875rem] leading-6'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.description),
          }}
        />
      )}
    </div>
  );
}

export default ProductDescription;
