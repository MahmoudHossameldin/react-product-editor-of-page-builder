import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch } from '../store';
import { setCategory, setModel } from '../store';
import { v4 as uuidv4 } from 'uuid';

type AddNewIconProps = {
  type: 'category' | 'business model';
};

function AddNewIcon({ type }: AddNewIconProps) {
  const dispatch = useAppDispatch();
  const [addingNewLabel, setAddingNewLabel] = useState(false);
  const [newLabelName, setNewLabelName] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (addingNewLabel && inputRef.current) {
      inputRef.current.focus();
    }
  }, [addingNewLabel]);

  const handleAddNewLabelClick = () => {
    setAddingNewLabel(true);
  };

  const handleNewLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLabelName(e.target.value);
  };

  const handleNewLabelSubmit = () => {
    if (newLabelName.trim() !== '') {
      const id = uuidv4();
      if (type === 'category') {
        dispatch(setCategory({ id, name: newLabelName }));
      } else if (type === 'business model') {
        dispatch(setModel({ id, name: newLabelName }));
      }
      setNewLabelName('');
      setAddingNewLabel(false);
    }
  };

  const handleBlur = () => {
    setNewLabelName('');
    setAddingNewLabel(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setNewLabelName('');
      setAddingNewLabel(false);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
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
            ref={inputRef}
            type='text'
            className='bg-[transparent] border-none outline-0'
            value={newLabelName}
            onChange={handleNewLabelChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            placeholder={`Enter new ${type}`}
          />
        </div>
      )}
    </div>
  );
}

export default AddNewIcon;
