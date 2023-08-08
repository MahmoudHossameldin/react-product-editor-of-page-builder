import React from 'react';
import modelIcon from '../assets/model.svg';
import { useAppSelector } from '../store';
import OfferDetailsLabel from './OfferDetailsLabel';
import AddNewIcon from './AddNewIcon';
import { useFormContext } from 'react-hook-form';
import { Model } from '../store/types';

function BusinessModel() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { getValues } = useFormContext();
  const modelsToRender = isEditPage
    ? getValues('businessModels')
    : data?.businessModels;

  return (
    <div className='md:basis-6/12 grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] gap-x-[0.375rem] gap-y-[.625rem] text-greyText mb-5 items-start'>
      <img src={modelIcon} alt='business models' />
      <div>Business Model</div>
      <div className='col-start-2 flex flex-wrap gap-[0.3125rem] items-center'>
        {modelsToRender?.map((item: Model) => (
          <OfferDetailsLabel businessModel={item} key={item.id} />
        ))}
        {isEditPage && <AddNewIcon type='business model' />}
      </div>
    </div>
  );
}

export default BusinessModel;
