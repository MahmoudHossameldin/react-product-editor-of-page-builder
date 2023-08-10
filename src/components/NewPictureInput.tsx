import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useAppSelector } from '../store';

type NewPictureInputProps = {
  setEditingState: React.Dispatch<
    React.SetStateAction<{
      editingPicture: boolean;
      noPicture: boolean;
    }>
  >;
  editingState: {
    editingPicture: boolean;
    noPicture: boolean;
  };
};

function NewPictureInput({
  setEditingState,
  editingState,
}: NewPictureInputProps) {
  const { register, getValues, setValue } = useFormContext();
  const { data } = useAppSelector((state) => state.product);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      setEditingState({ editingPicture: false, noPicture: false });
    }
  };

  const handleBlur = () => {
    if (getValues('picture') === '' && data?.picture) {
      setValue('picture', data.picture);
    }
    setEditingState({ editingPicture: false, noPicture: false });
  };

  return (
    <>
      {editingState.noPicture && (
        <div className='min-h-[10rem] p-2'>
          <label className='w-full mt-14 flex'>
            New image link:
            <input
              {...register('picture')}
              className='ml-1 p-1'
              type='text'
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              autoFocus
            />
          </label>
        </div>
      )}
    </>
  );
}

export default NewPictureInput;
