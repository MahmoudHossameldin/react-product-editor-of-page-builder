import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormContext } from 'react-hook-form';

type AddNewIconProps = {
  type: 'category' | 'business model';
};

function AddNewIcon({ type }: AddNewIconProps) {
  const [addingNewLabel, setAddingNewLabel] = useState(false);

  const { register, getValues, setValue, watch } = useFormContext();

  useEffect(() => {
    if (addingNewLabel) {
      const inputElement = document.getElementById('add-input');
      inputElement?.focus();
    }
  }, [addingNewLabel]);

  const handleAddNewLabelClick = () => {
    setAddingNewLabel(true);
  };

  const handleNewLabelSubmit = () => {
    if (getValues('add').trim() !== '') {
      const id = uuidv4();
      if (type === 'category') {
        const resetCategories = watch('categories');
        resetCategories.push({ id, name: getValues('add') });
        setValue('categories', resetCategories);
      } else if (type === 'business model') {
        const resetModels = watch('businessModels');
        resetModels.push({ id, name: getValues('add') });
        setValue('businessModels', resetModels);
      }
      setValue('add', '');
      setAddingNewLabel(false);
    }
  };

  const handleBlur = () => {
    setValue('add', '');
    setAddingNewLabel(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setValue('add', '');
      setAddingNewLabel(false);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNewLabelSubmit();
    }
  };

  return (
    <div className='ml-1'>
      {!addingNewLabel ? (
        <span
          onClick={handleAddNewLabelClick}
          className='border-greyBorderEdit rounded-full cursor-pointer font-semibold bg-gray-200 text-black flex justify-center items-center text-lg border w-5 h-5'
        >
          +
        </span>
      ) : (
        <div className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem] flex items-center'>
          <input
            {...register('add')}
            type='text'
            id='add-input'
            className='bg-[transparent] border-none outline-0'
            // value={newLabelName}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={`Enter new ${type}`}
          />
        </div>
      )}
    </div>
  );
}

export default AddNewIcon;
