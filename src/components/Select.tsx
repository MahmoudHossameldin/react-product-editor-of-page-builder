import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trl } from '../store/types';
import { useAppDispatch, setTrl } from '../store';

type SelectProps = {
  editedItem: Trl | undefined | null;
};

function Select({ editedItem }: SelectProps) {
  const [trlOptions, setTrlOptions] = useState<Trl[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get('https://api-test.innoloft.com/trl/')
      .then((response) => setTrlOptions(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = trlOptions.find(
      (option) => option.name === e.target.value
    );
    const selectedId = selectedOption ? selectedOption.id : '';
    dispatch(setTrl({ id: selectedId, name: e.target.value }));
  };

  return (
    <span className='min-w-0'>
      <select
        value={editedItem?.name}
        onChange={handleSelectChange}
        className='bg-[transparent] border-none outline-0 w-full cursor-pointer'
      >
        {trlOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </span>
  );
}

export default Select;
