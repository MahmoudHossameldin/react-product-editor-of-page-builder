import React from 'react';
import { useAppSelector } from '../store';
import Wysiwyg from './Wysiwyg';
import DOMPurify from 'dompurify';
import { setName, useAppDispatch } from '../store';

function ProductDescription() {
  const { data } = useAppSelector((state) => state.product);
  const { name } = useAppSelector((state) => state.productEdit);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();

  const handleInputBlur = () => {
    if (name === '' && data?.name) {
      dispatch(setName(data.name));
    }
  };

  return (
    <div className='p-5'>
      {isEditPage ? (
        <>
          <input
            type='text'
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            className='border px-[.625rem] py-[.3125rem] rounded-md mr-2 md:mr-0 font-semibold text-[.875rem] border-greyBorderEdit w-full mb-[.625rem]'
            onBlur={handleInputBlur}
          />
          <Wysiwyg />
        </>
      ) : (
        <>
          <h1 className='font-semibold'>{data?.name}</h1>
          {data?.description && (
            <p
              className='text-greyText text-[.875rem] leading-6 mt-[.625rem]'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.description),
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default ProductDescription;
