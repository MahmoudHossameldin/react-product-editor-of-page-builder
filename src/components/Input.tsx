import React, { useEffect, useRef } from 'react';
import { Model, Category } from '../store/types';
import { useAppDispatch, setCategory, setModel } from '../store';
import { v4 as uuidv4 } from 'uuid';

type InputProps = {
  editItemMode: boolean;
  setEditItemMode: React.Dispatch<React.SetStateAction<boolean>>;
  itemName: string | undefined;
  editedCategory: Category | undefined;
  editedModel: Model | undefined;
};

function Input({
  editItemMode,
  setEditItemMode,
  editedCategory,
  editedModel,
  itemName,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const editedItemId = editedCategory?.id || editedModel?.id;
  const editedItemName = editedCategory?.name || editedModel?.name;

  useEffect(() => {
    if (editItemMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editItemMode]);

  const handleValueChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    id: string = editedItemId || uuidv4()
  ) => {
    checkTypeAndDispatch(id, e.target.value);
  };

  const checkTypeAndDispatch = (id: string, name: string) => {
    if (editedCategory) {
      dispatch(
        setCategory({
          id: id,
          name: name,
        })
      );
    }
    if (editedModel) {
      dispatch(
        setModel({
          id: id,
          name: name,
        })
      );
    }
  };

  const fillEmptyLabel = () => {
    if (editedItemName === '' && itemName) {
      checkTypeAndDispatch(editedItemId || uuidv4(), itemName);
    }
  };

  const handleInputBlur = () => {
    setEditItemMode(false);
    fillEmptyLabel();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setEditItemMode(false);
      fillEmptyLabel();
    }
  };

  return (
    <input
      ref={inputRef}
      type='text'
      value={editedItemName}
      onChange={handleValueChange}
      className='bg-[transparent] border-none outline-0'
      onBlur={handleInputBlur}
      onKeyDown={handleInputKeyDown}
    />
  );
}

export default Input;
