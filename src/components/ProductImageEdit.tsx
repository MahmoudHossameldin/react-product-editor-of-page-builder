import React, { useState } from 'react';
import TypeEdit from './TypeEdit';
import EditIcon from './EditIcon';
import { useFormContext } from 'react-hook-form';
import NewPictureInput from './NewPictureInput';
import RemovePictureIcon from './RemovePictureIcon';

function ProductImage() {
  const { getValues } = useFormContext();
  const [editingState, setEditingState] = useState({
    editingPicture: false,
    noPicture: false,
  });

  const showPicture = !editingState.noPicture;

  const handleEditIconClick = () => {
    if (getValues('picture') === '') {
      setEditingState({ ...editingState, noPicture: true });
    } else {
      setEditingState({ ...editingState, editingPicture: true });
    }
  };

  const handleRemoveClick = () => {
    setEditingState({ ...editingState, noPicture: true });
  };

  return (
    <div className='max-h-[18.75rem] overflow-hidden flex justify-center items-center relative'>
      {
        <>
          <TypeEdit />
          {
            <div className='absolute top-0 right-0 h-10 w-10 flex justify-center items-center bg-white border-b border-l border-greyBorderEdit rounded-bl-md'>
              {editingState.editingPicture ? (
                <RemovePictureIcon handleRemoveClick={handleRemoveClick} />
              ) : (
                <EditIcon handleClick={handleEditIconClick} />
              )}
            </div>
          }
          <NewPictureInput
            setEditingState={setEditingState}
            editingState={editingState}
          />
          {showPicture && (
            <img
              src={getValues('picture')}
              alt='product'
              className='w-full h-full object-contain object-center min-h-[7rem]'
            />
          )}
        </>
      }
    </div>
  );
}

export default ProductImage;
