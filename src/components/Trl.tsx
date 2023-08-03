import React from 'react';
import trlIcon from '../assets/trl.svg';
import { useAppSelector } from '../store';
import OfferDetailsLabel from './OfferDetailsLabel';

function Trl() {
  const { data } = useAppSelector((state) => state.product);
  return (
    <div className='md:basis-6/12 grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] gap-x-[0.375rem] gap-y-[.625rem] text-greyText mb-5 items-start'>
      <img src={trlIcon} alt='implementation time' />
      <div>Implementation Time</div>
      <div className='col-start-2 flex flex-wrap gap-[0.3125rem] items-center'>
        <OfferDetailsLabel trl={data?.trl} />
      </div>
    </div>
  );
}

export default Trl;
