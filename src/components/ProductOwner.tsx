import React from 'react';
import photo from '../assets/photo.svg';
import { useAppSelector } from '../store';
import className from 'classnames';

type ProductOwnerProps = {
  sidebar?: boolean;
  owner?: boolean;
};

function ProductOwner({ sidebar, owner }: ProductOwnerProps) {
  const classes = className('flex items-center', {
    'text-greyTitles gap-[.9375rem]': sidebar,
    'text-greyText gap-[.625rem]': owner,
  });
  const nameClasses = className('font-semibold', {
    'text-lg': sidebar,
    'text-sm mb-[.3125rem]': owner,
  });

  const { data } = useAppSelector((state) => state.product);
  const { configData } = useAppSelector((state) => state.config);

  return (
    <>
      {configData?.hasUserSection && (
        <div className={classes}>
          <div>
            <img className='rounded-[50%]' src={photo} alt='user' />
          </div>
          <div>
            <p className={nameClasses}>
              {data?.user.firstName} {data?.user.lastName}
            </p>
            <p className='text-sm'>{data?.company.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductOwner;
