import React, { useState } from 'react';
import typeicon from '../assets/type.svg';
import EditIcon from './EditIcon';
import { useFormContext } from 'react-hook-form';

function TypeEdit() {
  const [editingType, setEditingType] = useState(false);
  const { register, getValues, resetField } = useFormContext();

  const resetIfEmpty = () => {
    if (getValues('type.name') === '') {
      resetField('type.name');
    }
  };

  const handleBlur = () => {
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
        <img src={typeicon} alt='type' />
      </div>
      <div className='py-[.5625rem] px-[.625rem] font-semibold h-10 flex items-center'>
        {!editingType && (
          <>
            <p onClick={handleEditIconClick}>{getValues('type.name')}</p>
            <EditIcon handleClick={handleEditIconClick} />
          </>
        )}

        {editingType && (
          <input
            {...register('type.name')}
            type='text'
            className='bg-[transparent] border-none outline-0'
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        )}
      </div>
    </div>
  );
}

export default TypeEdit;
