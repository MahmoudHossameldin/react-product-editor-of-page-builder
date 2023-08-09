import React from 'react';
import { useFormContext } from 'react-hook-form';

function ProductVideo() {
  const { register, watch, resetField } = useFormContext();
  const videoValue = watch('video');

  const handleBlur = () => {
    if (videoValue === '') {
      resetField('video');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='mt-5 mb-5 bg-white px-[.625rem] py-[1.875rem] md:p-5'>
      <h2 className='font-semibold mb-5'>Video</h2>

      <input
        {...register('video')}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        type='text'
        placeholder='Add a youtube or vimeo link'
        className='border px-[.625rem] py-[.4375rem] rounded-md mr-2 md:mr-0 text-greyText text-[.875rem] border-greyBorderEdit w-full'
      />
    </div>
  );
}

export default ProductVideo;
