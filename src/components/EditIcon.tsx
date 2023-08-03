import React from 'react';
import edit from '../assets/edit.svg';
import { Category, Model } from '../store/types';

type EditIconProps = {
  handleClick?: () => void;
};

function EditIcon({ handleClick }: EditIconProps) {
  return (
    <span className='p-1 cursor-pointer flex' onClick={handleClick}>
      <img src={edit} alt='edit pencil icon' />
    </span>
  );
}

export default EditIcon;
