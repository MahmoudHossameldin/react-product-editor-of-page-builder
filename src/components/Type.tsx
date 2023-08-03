import React, { useEffect, useState, useRef } from 'react';
import typeicon from '../assets/type.svg';
import { useAppDispatch, useAppSelector, setType } from '../store';
import EditIcon from './EditIcon';

function Type() {
  const { data } = useAppSelector((state) => state.product);
  const { type } = useAppSelector((state) => state.productEdit);
  const { isEditPage } = useAppSelector((state) => state.mode);
  const [editingType, setEditingType] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editingType && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingType]);

  const handleEditIconClick = () => {
    setEditingType(true);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setType({ id: data?.type.id, name: e.target.value }));
  };

  const handleInputBlur = () => {
    setEditingType(false);
    fillEmptyLabel();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setEditingType(false);
      fillEmptyLabel();
    }
  };

  const fillEmptyLabel = () => {
    if (type?.name === '' && data?.type.name) {
      dispatch(setType({ id: data?.type.id, name: data.type.name }));
    }
  };

  return (
    <>
      <div className='absolute top-0 left-0 bg-white flex rounded-tl-md rounded-br-md'>
        <div className='bg-blue rounded-br-md rounded-tl-md h-10 w-10 grid justify-center content-center'>
          <img src={typeicon} alt={data?.type.name} />
        </div>
        <div className='py-[.5625rem] px-[.625rem] font-semibold h-10 flex items-center'>
          {!isEditPage && data?.type.name}
          {isEditPage && !editingType && (
            <p onClick={handleEditIconClick}>{type?.name || data?.type.name}</p>
          )}
          {isEditPage && !editingType && (
            <EditIcon handleClick={handleEditIconClick} />
          )}
          {isEditPage && editingType && (
            <input
              ref={inputRef}
              type='text'
              value={type?.name}
              onChange={handleValueChange}
              className='bg-[transparent] border-none outline-0'
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Type;
