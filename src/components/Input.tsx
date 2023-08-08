import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  editItemMode: boolean;
  setEditItemMode: React.Dispatch<React.SetStateAction<boolean>>;
  editedItemIndex: number;
  type?: 'category' | 'business model';
};

function Input({
  editItemMode,
  setEditItemMode,
  editedItemIndex,
  type,
}: InputProps) {
  const { register, getValues, setValue } = useFormContext();
  const arrayType = type === 'category' ? 'categories' : 'businessModels';

  useEffect(() => {
    if (editItemMode) {
      const inputElement = document.getElementById('edit-input');
      inputElement?.focus();
    }
  }, [editItemMode]);

  const handleInputBlur = () => {
    setEditItemMode(false);
    removeEmpty();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setEditItemMode(false);
      removeEmpty();
    }
  };

  const removeEmpty = () => {
    if (
      type === 'category' &&
      editedItemIndex !== -1 &&
      editedItemIndex !== undefined &&
      getValues(`categories[${editedItemIndex}].name`) === ''
    ) {
      const resetCategories = getValues('categories');
      resetCategories.splice(editedItemIndex, 1);
      setValue('categories', resetCategories);
    }
    if (
      type === 'business model' &&
      editedItemIndex !== -1 &&
      editedItemIndex !== undefined &&
      getValues(`businessModels[${editedItemIndex}].name`) === ''
    ) {
      const resetModels = getValues('businessModels');
      resetModels.splice(editedItemIndex, 1);
      setValue('businessModels', resetModels);
    }
  };

  return (
    <input
      {...register(`${arrayType}[${editedItemIndex}].name`)}
      id='edit-input'
      type='text'
      className='bg-[transparent] border-none outline-0'
      onBlur={handleInputBlur}
      onKeyDown={handleInputKeyDown}
    />
  );
}

export default Input;
