import React from 'react';
import photo from '../assets/photo.svg';
import { useAppSelector } from '../store';

function ProductOwner() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='flex items-center gap-[.9375rem] text-greyTitles'>
      <div>
        <img className='rounded-[50%]' src={photo} alt='user' />
      </div>
      <div>
        <p className='font-semibold text-lg'>
          {data?.user.firstName} {data?.user.lastName}
        </p>
        <p className='text-sm'>{data?.company.name}</p>
      </div>
    </div>
  );
}

export default ProductOwner;
