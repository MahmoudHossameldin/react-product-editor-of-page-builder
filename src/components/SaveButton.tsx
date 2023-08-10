import React from 'react';
import { useAppSelector, useAppDispatch, updateProductData } from '../store';
import { Link } from 'react-router-dom';
import { useFormContext, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { EditedData } from '../store/types';
import check from '../assets/check.svg';

function SaveButton() {
  const dispatch = useAppDispatch();
  const { isEditPage } = useAppSelector((state) => state.mode);
  const { configData } = useAppSelector((state) => state.config);
  const { data } = useAppSelector((state) => state.product);

  const {
    getValues,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting },
  } = useFormContext();

  const error = Object.keys(errors).length !== 0;
  const updatedData = getValues();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const productApiUrl = `${API_BASE_URL}/product/${data?.id}/`;
  const mainColor = configData?.mainColor;
  const opacity = isSubmitting ? 'opacity-50' : '';

  const onSubmit: SubmitHandler<EditedData> = async () => {
    try {
      delete updatedData.add;
      const response = await axios.put(productApiUrl, updatedData);
      dispatch(updateProductData(response.data));
    } catch (error) {
      // handled by RHF
      console.log(error);
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
              className={`bg-blue ml-[.625rem] rounded-md px-[.625rem] py-[.3125rem] text-white text-sm ${opacity} flex gap-1 items-center`}
              style={{ backgroundColor: mainColor }}
            >
              <img src={check} alt='save changes' />
              Save
            </button>
          </div>
          {error && (
            <p className='text-[#f56565] pr-5 pb-5 text-right'>
              There was an error saving the changes!
            </p>
          )}
          {isSubmitSuccessful && (
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
