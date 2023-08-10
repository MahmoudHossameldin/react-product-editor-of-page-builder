import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store';

function EditButton() {
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { configData } = useAppSelector((state) => state.config);
  const width = isEditPage ? 'w-[5.625rem]' : 'w-[2.8125rem]';
  const mainColor = configData?.mainColor;

  return (
    <div>
      <Link
        to={isEditPage ? '/product' : '/product/edit'}
        className={`bg-blue flex justify-center items-center text-sm mb-5 text-white rounded-md text-[.875rem] h-[1.875rem] ${width}`}
        style={{ backgroundColor: mainColor }}
      >
        {isEditPage ? 'View Offer' : 'Edit'}
      </Link>
    </div>
  );
}

export default EditButton;
