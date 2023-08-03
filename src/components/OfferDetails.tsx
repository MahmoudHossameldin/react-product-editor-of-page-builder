import React from 'react';
import { useAppSelector } from '../store';
import Technology from './Technology';
import BusinessModel from './BusinessModel';
import Trl from './Trl';
import Cost from './Cost';

function OfferDetails() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='px-[.625rem] py-5 md:px-5 md:py-[1.875rem] bg-white mb-5 '>
      <h2 className='font-semibold mb-5'>Offer details</h2>
      {data && (
        <div>
          <div className='md:flex md:gap-x-10'>
            <Technology />
            <BusinessModel />
          </div>
          <div className='md:flex md:gap-x-10 justify-between'>
            <Trl />
            <Cost />
          </div>
        </div>
      )}
    </div>
  );
}

export default OfferDetails;
