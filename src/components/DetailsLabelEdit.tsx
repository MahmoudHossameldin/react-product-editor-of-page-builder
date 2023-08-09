import React, { useState } from 'react';
import { Category, Model, Trl } from '../store/types';
import Select from './Select';
import EditIcon from './EditIcon';
import EditItemInput from './EditItemInput';
import { useFormContext } from 'react-hook-form';

type DetailsLabelEditProps = {
  trl?: Trl;
  category?: Category;
  costs?: string;
  businessModel?: Model;
};

function DetailsLabelEdit({
  trl,
  category,
  costs,
  businessModel,
}: DetailsLabelEditProps) {
  const { getValues } = useFormContext();
  const [editItemMode, setEditItemMode] = useState(false);

  const editedCategoryIndex = getValues('categories').findIndex(
    (obj: Category) => obj.id === category?.id
  );
  const editedModelIndex = getValues('businessModels').findIndex(
    (obj: Model) => obj.id === businessModel?.id
  );

  const editedItemName =
    (category && getValues(`categories[${editedCategoryIndex}].name`)) ||
    (businessModel && getValues(`businessModels[${editedModelIndex}].name`)) ||
    (costs && costs) ||
    (trl && trl.name);

  const itemId = category?.id || trl?.id || businessModel?.id;
  const editableItem = (category || businessModel || trl) && editedItemName;
  const showEditIcon = editableItem && !editItemMode;
  const showSelect = editItemMode && trl;
  const showInput = editItemMode && (category || businessModel);

  let editedItemIndex;
  if (editedCategoryIndex !== undefined && editedCategoryIndex !== -1) {
    editedItemIndex = editedCategoryIndex;
  } else if (editedModelIndex !== undefined && editedModelIndex !== -1) {
    editedItemIndex = editedModelIndex;
  }

  const handleEditIconClick = () => {
    if (editableItem) {
      setEditItemMode(true);
    }
  };

  return (
    <>
      {editedItemName && (
        <span
          key={itemId || 'costs'}
          className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem] flex items-center'
        >
          {!editItemMode && (
            <p onClick={handleEditIconClick}>{editedItemName}</p>
          )}
          {showEditIcon && <EditIcon handleClick={handleEditIconClick} />}
          {showSelect && <Select />}
          {showInput && (
            <EditItemInput
              setEditItemMode={setEditItemMode}
              type={
                (category && 'category') || (businessModel && 'business model')
              }
              editedItemIndex={editedItemIndex}
            />
          )}
        </span>
      )}
    </>
  );
}

export default DetailsLabelEdit;
