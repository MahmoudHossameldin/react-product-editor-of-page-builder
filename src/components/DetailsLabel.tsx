import React from 'react';
import { Category, Model, Trl } from '../store/types';

type DetailsLabelProps = {
  trl?: Trl;
  category?: Category;
  costs?: string;
  businessModel?: Model;
};

function DetailsLabel({
  trl,
  category,
  costs,
  businessModel,
}: DetailsLabelProps) {
  const itemId = category?.id || trl?.id || businessModel?.id;
  const itemName = category?.name || trl?.name || businessModel?.name || costs;

  return (
    <span
      key={itemId || 'costs'}
      className='py-[0.3125rem] px-[.875rem] bg-greyBorder rounded-[1.25rem] text-[.875rem] flex items-center'
    >
      <p>{itemName}</p>
    </span>
  );
}

export default DetailsLabel;
