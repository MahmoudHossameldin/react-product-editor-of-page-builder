import React from 'react';
import { useAppSelector } from '../store';
import Wysiwyg from './Wysiwyg';
import DOMPurify from 'dompurify';
import { useFormContext } from 'react-hook-form';

function ProductDescription() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { register, getValues, setValue } = useFormContext();

  const handleInputBlur = () => {
    if (getValues('name') === '' && data?.name) {
      setValue('name', data.name);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='p-5'>
      {isEditPage ? (
        <>
          <input
            {...register('name')}
            type='text'
            className='border px-[.625rem] py-[.3125rem] rounded-md mr-2 md:mr-0 font-semibold text-[.875rem] border-greyBorderEdit w-full mb-[.625rem]'
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
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
