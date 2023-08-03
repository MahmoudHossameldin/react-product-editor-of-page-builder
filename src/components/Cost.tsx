import React from 'react';
import costsIcon from '../assets/costs.svg';
import OfferDetailsLabel from './OfferDetailsLabel';
import { useAppSelector } from '../store';

function Cost() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='md:basis-6/12 grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] gap-x-[0.375rem] gap-y-[.625rem] text-greyText mb-5 items-start'>
      <img src={costsIcon} alt='costs' />
      <div>Costs</div>
      <div className='col-start-2 flex flex-wrap gap-[0.3125rem] items-center'>
        <OfferDetailsLabel costs={data?.investmentEffort} />
      </div>
    </div>
  );
}

export default Cost;
