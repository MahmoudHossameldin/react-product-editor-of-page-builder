import React from 'react';
import Wysiwyg from './Wysiwyg';
import { useFormContext } from 'react-hook-form';

function ProductDescription() {
  const { register, resetField, watch } = useFormContext();
  const nameValue = watch('name');

  const handleBlur = () => {
    if (nameValue === '') {
      resetField('name');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='p-5'>
      {
        <>
          <input
            {...register('name')}
            type='text'
            className='border px-[.625rem] py-[.3125rem] rounded-md mr-2 md:mr-0 font-semibold text-[.875rem] border-greyBorderEdit w-full mb-[.625rem] text-greyTitles'
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
          <Wysiwyg />
        </>
      }
    </div>
  );
}

export default ProductDescription;
