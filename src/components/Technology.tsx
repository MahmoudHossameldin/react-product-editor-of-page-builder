import React from 'react';
import technologyIcon from '../assets/technology.svg';
import { useAppSelector } from '../store';
import DetailsLabelEdit from './DetailsLabelEdit';
import AddNewIcon from './AddNewIcon';
import { useFormContext } from 'react-hook-form';
import { Category } from '../store/types';
import DetailsLabel from './DetailsLabel';

function Technology() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const form = useFormContext();
  const categoriesToRender = isEditPage
    ? form?.getValues('categories')
    : data?.categories;

  return (
    <div className='md:basis-6/12 grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] gap-x-[0.375rem] gap-y-[.625rem] text-greyText mb-5 items-start'>
      <img src={technologyIcon} alt='categories' />
      <div>Technology</div>
      <div className='col-start-2 flex flex-wrap gap-[0.3125rem] items-center'>
        {categoriesToRender.map((item: Category) =>
          isEditPage ? (
            <DetailsLabelEdit category={item} key={item.id} />
          ) : (
            <DetailsLabel category={item} key={item.id} />
          )
        )}
        {isEditPage && <AddNewIcon type='category' />}
      </div>
    </div>
  );
}

export default Technology;
