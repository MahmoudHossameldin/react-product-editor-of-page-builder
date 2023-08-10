import React from 'react';
import typeicon from '../assets/type.svg';
import { useAppSelector } from '../store';

function Type() {
  const { data } = useAppSelector((state) => state.product);
  const { configData } = useAppSelector((state) => state.config);
  const mainColor = configData?.mainColor;

  return (
    <div className='absolute top-0 left-0 bg-white flex rounded-tl-md rounded-br-md'>
      <div
        className='bg-blue rounded-br-md rounded-tl-md h-10 w-10 grid justify-center content-center'
        style={{ backgroundColor: mainColor }}
      >
        <img src={typeicon} alt='type' />
      </div>
      <div className='py-[.5625rem] px-[.625rem] font-semibold h-10 flex items-center text-greyTitles'>
        {data?.type.name}
      </div>
    </div>
  );
}

export default Type;
