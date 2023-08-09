import React from 'react';
import { useFormContext } from 'react-hook-form';

type EditItemInputProps = {
  setEditItemMode: React.Dispatch<React.SetStateAction<boolean>>;
  editedItemIndex: number;
  type?: 'category' | 'business model';
};

function EditItemInput({
  setEditItemMode,
  editedItemIndex,
  type,
}: EditItemInputProps) {
  const { register, getValues, setValue } = useFormContext();
  const arrayType = type === 'category' ? 'categories' : 'businessModels';

  const removeEmptyItem = (itemType: string, index: number) => {
    const resetItems = getValues(itemType);
    resetItems.splice(index, 1);
    setValue(itemType, resetItems);
  };

  const isValueEmpty = () => {
    const itemType = `${arrayType}[${editedItemIndex}].name`;
    return (
      editedItemIndex !== -1 &&
      editedItemIndex !== undefined &&
      getValues(itemType) === ''
    );
  };

  const handleCommonEvents = () => {
    setEditItemMode(false);

    if (isValueEmpty()) {
      removeEmptyItem(arrayType, editedItemIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      handleCommonEvents();
    }
  };

  const handleBlur = () => {
    handleCommonEvents();
  };

  return (
    <input
      {...register(`${arrayType}[${editedItemIndex}].name`)}
      type='text'
      className='bg-[transparent] border-none outline-0'
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
}

export default EditItemInput;
