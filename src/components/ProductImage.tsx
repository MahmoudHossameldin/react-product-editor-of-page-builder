import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../store';
import Type from './Type';
import EditIcon from './EditIcon';
import deleteIcon from '../assets/delete.svg';
import { useFormContext } from 'react-hook-form';

function ProductImage() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const [editingImg, setEditingImg] = useState(false);
  const [noImg, setNoImg] = useState(false);
  const { register, getValues, setValue } = useFormContext();
  const imgSrc = isEditPage && getValues('picture');

  useEffect(() => {
    if (noImg) {
      const inputElement = document.getElementById('img-input');
      inputElement?.focus();
    }
  }, [noImg]);

  const handleEditIconClick = () => {
    if (getValues('picture') === '') {
      setNoImg(true);
    } else {
      setEditingImg(true);
    }
  };

  const handleRemoveClick = () => {
    setNoImg(true);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      setEditingImg(false);
      setNoImg(false);
    }
  };
  const handleInputBlur = () => {
    if (getValues('picture') === '' && data?.picture) {
      setValue('picture', data.picture);
    }
    setEditingImg(false);
    setNoImg(false);
  };

  return (
    <div className='max-h-[18.75rem] overflow-hidden flex justify-center items-center relative'>
      {data && (
        <>
          <Type />
          {isEditPage && (
            <div className='absolute top-0 right-0 h-10 w-10 flex justify-center items-center bg-white border-b border-l border-greyBorderEdit rounded-bl-md'>
              {editingImg ? (
                <span
                  className='p-1 cursor-pointer flex'
                  onClick={handleRemoveClick}
                >
                  <img src={deleteIcon} alt='delete icon' />
                </span>
              ) : (
                <EditIcon handleClick={handleEditIconClick} />
              )}
            </div>
          )}
          {noImg && (
            <div className='min-h-[10rem] p-2'>
              <label className='w-full mt-14 flex'>
                New image link:
                <input
                  {...register('picture')}
                  className='ml-1 p-1'
                  id='img-input'
                  type='text'
                  onKeyDown={handleInputKeyDown}
                  onBlur={handleInputBlur}
                />
              </label>
            </div>
          )}
          {(!isEditPage || (isEditPage && !noImg)) && (
            <img
              src={isEditPage ? imgSrc || '' : data?.picture}
              alt='product'
              className='w-full h-full object-contain object-center min-h-[7rem]'
            />
          )}
        </>
      )}
    </div>
  );
}

export default ProductImage;
