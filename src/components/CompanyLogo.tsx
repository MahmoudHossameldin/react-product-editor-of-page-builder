import React from 'react';
import { useAppSelector } from '../store';

function CompanyLogo() {
  const { data } = useAppSelector((state) => state.product);

  return (
    <div>
      <p className='font-semibold'>Offered By</p>
      <img
        src={data?.company.logo}
        alt={data?.company.name}
        className='mt-5 mb-[.625rem] font-semibold max-w-[21.0625rem] md:max-w-[12.5rem]'
      />
    </div>
  );
}

export default CompanyLogo;
