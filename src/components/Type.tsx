import React from 'react';
import typeicon from '../assets/type.svg';
import { useAppSelector } from '../store';

function Type() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='absolute top-0 left-0 bg-white flex rounded-tl-md rounded-br-md'>
      <div className='bg-blue rounded-br-md rounded-tl-md h-10 w-10 grid justify-center content-center'>
        <img src={typeicon} alt='type' />
      </div>
      <div className='py-[.5625rem] px-[.625rem] font-semibold h-10 flex items-center'>
        {data?.type.name}
      </div>
    </div>
  );
}

export default Type;
