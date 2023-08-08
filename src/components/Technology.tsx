import React from 'react';
import technologyIcon from '../assets/technology.svg';
import { useAppSelector } from '../store';
import OfferDetailsLabel from './OfferDetailsLabel';
import AddNewIcon from './AddNewIcon';
import { useFormContext } from 'react-hook-form';
import { Category } from '../store/types';

function Technology() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { getValues } = useFormContext();
  const categoriesToRender = isEditPage
    ? getValues('categories')
    : data?.categories;

  return (
    <div className='md:basis-6/12 grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] gap-x-[0.375rem] gap-y-[.625rem] text-greyText mb-5 items-start'>
      <img src={technologyIcon} alt='categories' />
      <div>Technology</div>
      <div className='col-start-2 flex flex-wrap gap-[0.3125rem] items-center'>
        {categoriesToRender.map((item: Category) => (
          <OfferDetailsLabel category={item} key={item.id} />
        ))}
        {isEditPage && <AddNewIcon type='category' />}
      </div>
    </div>
  );
}

export default Technology;
