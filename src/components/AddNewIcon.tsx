import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormContext } from 'react-hook-form';

type AddNewIconProps = {
  type: 'category' | 'business model';
};

function AddNewIcon({ type }: AddNewIconProps) {
  const { register, getValues, setValue, watch } = useFormContext();
  const [addingNewLabel, setAddingNewLabel] = useState(false);
  const arrayName = type === 'category' ? 'categories' : 'businessModels';

  const handleAddNewLabelClick = () => {
    setAddingNewLabel(true);
  };

  const handleNewLabelSubmit = () => {
    const inputValue = getValues('add').trim();

    if (inputValue !== '') {
      const id = uuidv4();
      const resetItems = watch(arrayName);
      resetItems.push({ id, name: inputValue });
      setValue(arrayName, resetItems);
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
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleNewLabelSubmit();
    }
  };

  return (
    <div className='ml-1'>
      {!addingNewLabel ? (
        <span
          onClick={handleAddNewLabelClick}
          className='border-greyBorder rounded-full cursor-pointer font-semibold bg-gray-200 text-black flex justify-center items-center text-lg border w-5 h-5'
        >
          +
        </span>
      ) : (
        <div className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem] flex items-center'>
          <input
            {...register('add')}
            type='text'
            className='bg-[transparent] border-none outline-0'
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={`Enter new ${type}`}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}

export default AddNewIcon;
