import React from 'react';
import deleteIcon from '../assets/delete.svg';

type RemovePictureIconProps = {
  handleRemoveClick: () => void;
};

function RemovePictureIcon({ handleRemoveClick }: RemovePictureIconProps) {
  return (
    <span className='p-1 cursor-pointer flex' onClick={handleRemoveClick}>
      <img src={deleteIcon} alt='delete icon' />
    </span>
  );
}

export default RemovePictureIcon;
