import React, { useState, useEffect } from 'react';
import typeicon from '../assets/type.svg';
import { useAppSelector } from '../store';
import EditIcon from './EditIcon';
import { useFormContext } from 'react-hook-form';

function Type() {
  const { data } = useAppSelector((state) => state.product);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const [editingType, setEditingType] = useState(false);
  const { register, getValues, setValue } = useFormContext();

  useEffect(() => {
    if (editingType) {
      const inputElement = document.getElementById('type-input');
      inputElement?.focus();
    }
  }, [editingType]);

  const resetIfEmpty = () => {
    if (getValues('type.name') === '' && data?.type.name) {
      setValue('type.name', data.type.name);
    }
  };

  const handleInputBlur = () => {
    resetIfEmpty();
    setEditingType(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      resetIfEmpty();
      setEditingType(false);
    }
  };

  const handleEditIconClick = () => {
    setEditingType(true);
  };

  return (
    <div className='absolute top-0 left-0 bg-white flex rounded-tl-md rounded-br-md'>
      <div className='bg-blue rounded-br-md rounded-tl-md h-10 w-10 grid justify-center content-center'>
        <img src={typeicon} alt={data?.type.name} />
      </div>
      <div className='py-[.5625rem] px-[.625rem] font-semibold h-10 flex items-center'>
        {!isEditPage && data?.type.name}
        {isEditPage && !editingType && (
          <p onClick={handleEditIconClick}>{getValues('type.name')}</p>
        )}
        {isEditPage && !editingType && (
          <EditIcon handleClick={handleEditIconClick} />
        )}
        {isEditPage && editingType && (
          <input
            {...register('type.name')}
            type='text'
            className='bg-[transparent] border-none outline-0'
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            id='type-input'
          />
        )}
      </div>
    </div>
  );
}

export default Type;
