import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector, setPicture } from '../store';
import Type from './Type';
import EditIcon from './EditIcon';
import deleteIcon from '../assets/delete.svg';

function ProductImage() {
  const { data } = useAppSelector((state) => state.product);
  const { picture } = useAppSelector((state) => state.productEdit);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const [editingImg, setEditingImg] = useState(false);
  const [removedImg, setRemovedImg] = useState(false);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (removedImg && inputRef.current) {
      inputRef.current.focus();
    }
  }, [removedImg]);

  const handleEditIconClick = () => {
    setEditingImg(true);
  };

  const handleRemoveClick = () => {
    dispatch(setPicture(''));
    setRemovedImg(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPicture(e.target.value));
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setEditingImg(false);
      setRemovedImg(false);
      fillEmptyLabel();
    }
  };

  const handleInputBlur = () => {
    setEditingImg(false);
    setRemovedImg(false);
    fillEmptyLabel();
  };

  const fillEmptyLabel = () => {
    if (picture === '' && data?.picture) {
      dispatch(setPicture(data.picture));
    }
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
          {removedImg && (
            <div className='min-h-[10rem] p-2'>
              <label className='w-full mt-14 flex'>
                New image link:
                <input
                  className='ml-1 p-1'
                  ref={inputRef}
                  type='text'
                  value={picture}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  onBlur={handleInputBlur}
                />
              </label>
            </div>
          )}
          {(!isEditPage || (isEditPage && !removedImg)) && (
            <img
              src={isEditPage && picture ? picture : data?.picture}
              alt='product'
              className='w-full h-full object-contain object-center'
            />
          )}
        </>
      )}
    </div>
  );
}

export default ProductImage;
