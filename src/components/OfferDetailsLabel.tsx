import React, { useState } from 'react';
import { useAppSelector } from '../store';
import { Category, Model, Trl } from '../store/types';
import Select from './Select';
import EditIcon from './EditIcon';
import Input from './Input';
import { useFormContext } from 'react-hook-form';

type OfferDetailsLabelProps = {
  trl?: Trl;
  category?: Category;
  costs?: string;
  businessModel?: Model;
};

function OfferDetailsLabel({
  trl,
  category,
  costs,
  businessModel,
}: OfferDetailsLabelProps) {
  const { getValues } = useFormContext();
  const { isEditPage } = useAppSelector((state) => state.mode);
  const [editItemMode, setEditItemMode] = useState(false);
  const itemName = category?.name || trl?.name || businessModel?.name || costs;
  const editPageNotEditItemMode = !editItemMode && isEditPage;
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
  const editableItem =
    isEditPage && (category || businessModel || trl) && editedItemName;
  const itemId =
    getValues(`categories[${editedCategoryIndex}].id`) ||
    getValues(`businessModels[${editedModelIndex}].id`) ||
    getValues(`trl.id`) ||
    category?.id ||
    trl?.id ||
    businessModel?.id;
  const showEditIcon = editableItem && !editItemMode;
  const showSelect = editItemMode && trl && isEditPage;
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
      {((isEditPage && editedItemName) || !isEditPage) && (
        <span
          key={itemId || 'costs'}
          className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem] flex items-center'
        >
          {!isEditPage && <p>{itemName}</p>}
          {editPageNotEditItemMode && (
            <p onClick={handleEditIconClick}>{editedItemName}</p>
          )}
          {showEditIcon && <EditIcon handleClick={handleEditIconClick} />}
          {showSelect && <Select />}
          {showInput && (
            <Input
              editItemMode
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

export default OfferDetailsLabel;
