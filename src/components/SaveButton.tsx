import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch, updateProductData } from '../store';
import { Link } from 'react-router-dom';
import { useFormContext, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { EditedData } from '../store/types';

function SaveButton() {
  const dispatch = useAppDispatch();
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { getValues, handleSubmit } = useFormContext();
  const updatedData = getValues();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [shouldResetSuccess, setShouldResetSuccess] = useState(false);
  const productApiUrl = 'https://api-test.innoloft.com/product/6781/';

  useEffect(() => {
    if (success && shouldResetSuccess) {
      const timerId = setTimeout(() => {
        setSuccess(false);
        setShouldResetSuccess(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [success, shouldResetSuccess]);

  const onSubmit: SubmitHandler<EditedData> = async () => {
    try {
      setError(null);
      setSuccess(false);
      setShouldResetSuccess(true);

      console.log('updated data: ', updatedData);
      delete updatedData.add;
      const response = await axios.put(productApiUrl, updatedData);
      dispatch(updateProductData(response.data));

      setSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while updating the product.');
    }
  };

  return (
    <>
      {isEditPage && (
        <div className='mt-4'>
          <div className='flex justify-end pr-5 pb-5 items-center'>
            <Link to='/product' className='text-greyText text-sm'>
              Cancel
            </Link>
            <button
              type='button'
              onClick={handleSubmit(onSubmit)}
              className='ml-[.625rem] rounded-md bg-[#272E71] px-[.625rem] py-[.3125rem] text-white text-sm'
            >
              Save
            </button>
          </div>
          {error && (
            <p className='text-[#f56565] pr-5 pb-5 text-right'>{error}</p>
          )}
          {success && (
            <p className='text-[#48bb78] pr-5 pb-5 text-right'>
              Product data updated successfully!
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default SaveButton;
