import React from 'react';
import { useAppSelector } from '../store';
import technology from '../assets/technology.svg';
import model from '../assets/model.svg';
import trl from '../assets/trl.svg';
import costs from '../assets/costs.svg';
import OfferDetailsItem from './OfferDetailsItem';

function OfferDetails() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div className='px-[.625rem] py-5 md:px-5 md:py-[1.875rem] bg-white mb-5 '>
      <h2 className='font-semibold mb-5'>Offer details</h2>
      {data && (
        <div>
          <div className='md:flex md:gap-x-10'>
            <OfferDetailsItem
              imgSrc={technology}
              altText='categories'
              title='Technology'
              data={data.categories}
            />
            <OfferDetailsItem
              imgSrc={model}
              altText='business model'
              title='Business Model'
              data={data.businessModels}
            />
          </div>
          <div className='md:flex md:gap-x-10 justify-between'>
            <OfferDetailsItem
              imgSrc={trl}
              altText='Implementation Time'
              title='Implementation Time'
              data={[data.trl]}
            />
            <OfferDetailsItem
              imgSrc={costs}
              altText='Costs'
              title='Costs'
              data={[{ id: 1, name: data.investmentEffort }]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OfferDetails;
