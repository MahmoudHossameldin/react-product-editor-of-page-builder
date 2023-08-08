import React from 'react';
import { useAppSelector } from '../store';
import { useFormContext } from 'react-hook-form';

function ProductVideo() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { register, getValues, setValue } = useFormContext();

  const handleInputBlur = () => {
    if (getValues('video') === '' && data?.video) {
      setValue('video', data.video);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const youtubeEmbedUrl = data?.video.replace('watch?v=', 'embed/');

  return (
    <div className='mt-5 mb-5 bg-white px-[.625rem] py-[1.875rem] md:p-5'>
      <h2 className='font-semibold mb-5'>Video</h2>
      {youtubeEmbedUrl && !isEditPage && (
        <div className='max-w-[44.6875rem] mx-auto relative overflow-hidden w-full aspect-video max-h-[25rem]'>
          <iframe
            src={youtubeEmbedUrl}
            className='absolute top-0 left-0 bottom-0 right-0 w-full h-full'
          ></iframe>
        </div>
      )}
      {isEditPage && (
        <input
          {...register('video')}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          type='text'
          placeholder='Add a youtube or vimeo link'
          className='border px-[.625rem] py-[.4375rem] rounded-md mr-2 md:mr-0 text-greyText text-[.875rem] border-greyBorderEdit w-full'
        />
      )}
    </div>
  );
}

export default ProductVideo;
