import React, { useState } from 'react';
import { useAppSelector } from '../store';
import { Category, Model, Trl } from '../store/types';
import Select from './Select';
import EditIcon from './EditIcon';
import Input from './Input';

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
  const { isEditPage } = useAppSelector((state) => state.mode);
  const {
    categories,
    businessModels,
    trl: trle,
  } = useAppSelector((state) => state.productEdit);
  const [editItemMode, setEditItemMode] = useState(false);
  const editableItem = isEditPage && (category || businessModel || trl);
  const showEditIcon = editableItem && !editItemMode && !trl;
  const editPageNotEditItemMode = !editItemMode && isEditPage;
  const editedCategory = categories?.find((obj) => obj.id === category?.id);
  const editedModel = businessModels?.find(
    (obj) => obj.id === businessModel?.id
  );
  const itemName = category?.name || trl?.name || businessModel?.name || costs;
  const itemId = category?.id || trl?.id || businessModel?.id;

  const handleEditIconClick = () => {
    if (editableItem) {
      setEditItemMode(true);
    }
  };

  return (
    <span
      key={itemId || 'costs'}
      className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem] flex items-center'
    >
      {!isEditPage && <p>{itemName}</p>}
      {editPageNotEditItemMode && !trl && (
        <p onClick={handleEditIconClick}>
          {editedCategory?.name || editedModel?.name || itemName}
        </p>
      )}
      {showEditIcon && <EditIcon handleClick={handleEditIconClick} />}
      {isEditPage && trl && <Select editedItem={trle} />}
      {editItemMode && (category || businessModel) && (
        <Input
          editItemMode
          setEditItemMode={setEditItemMode}
          itemName={itemName}
          editedCategory={editedCategory}
          editedModel={editedModel}
        />
      )}
    </span>
  );
}

export default OfferDetailsLabel;
