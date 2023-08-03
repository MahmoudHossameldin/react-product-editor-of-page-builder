import React from 'react';
import EditButton from './EditButton';
import home from '../assets/home.svg';
import right from '../assets/right.svg';
import { useAppSelector } from '../store';

function Breadcrumbs() {
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { data } = useAppSelector((state) => state.product);
  const chevron = <img src={right} alt='inner page' className='mx-[.625rem]' />;

  return (
    <div className='flex justify-between flex-wrap text-greyText'>
      <div className='flex mb-5 items-center'>
        {isEditPage ? (
          <p className='font-semibold'>Offer Title</p>
        ) : (
          <>
            <img src={home} alt='homepage' />
            {chevron}
            <p>Offer</p>
            {chevron}
            <p>{data?.name}</p>
          </>
        )}
      </div>
      <EditButton />
    </div>
  );
}

export default Breadcrumbs;
