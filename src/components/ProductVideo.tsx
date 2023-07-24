import React from 'react';
import { useAppSelector } from '../store';

function ProductVideo() {
  const { data } = useAppSelector((state) => state.product);
  const youtubeEmbedUrl = data?.video.replace('watch?v=', 'embed/');
  return (
    <div className='mt-5 mb-5 bg-white px-[.625rem] py-[1.875rem] md:p-5'>
      <h2 className='font-semibold mb-5'>Video</h2>
      {youtubeEmbedUrl && (
        // <div className='md:max-w-[44.6875rem] mx-auto h-[13.125rem] md:h-[25rem]'>
        <div className='max-w-[44.6875rem] mx-auto relative overflow-hidden w-full aspect-video max-h-[25rem]'>
          <iframe
            src={youtubeEmbedUrl}
            className='absolute top-0 left-0 bottom-0 right-0 w-full h-full'
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ProductVideo;
