import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { Link } from 'react-router-dom';

function SaveButton() {
  const { isEditPage } = useAppSelector((state) => state.mode);
  const editedData = useAppSelector((state) => state.productEdit);
  const handleSaveChanges = () => {
    console.log('send PUT request', editedData);
  };

  return (
    <>
      {isEditPage && (
        <div className='mt-4 flex justify-end pr-5 pb-5 items-center'>
          <Link to='/product' className='text-greyText text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            onClick={handleSaveChanges}
            className='ml-[.625rem] rounded-md bg-[#272E71] px-[.625rem] py-[.3125rem] text-white text-sm'
          >
            Save Changes
          </button>
        </div>
      )}
    </>
  );
}

export default SaveButton;
