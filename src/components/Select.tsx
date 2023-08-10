import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trl } from '../store/types';
import { useFormContext } from 'react-hook-form';
import { useAppSelector } from '../store';

function Select() {
  const [trlOptions, setTrlOptions] = useState<Trl[]>([]);
  const { register, setValue, watch } = useFormContext();
  const { data } = useAppSelector((state) => state.product);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const trlApiUrl = `${API_BASE_URL}/trl/`;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = trlOptions.find(
      (option) => option.name === selectedValue
    );

    setValue('trl', selectedOption);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(trlApiUrl);
        setTrlOptions(response.data);
        const trlValue = watch('trl');
        setValue('trl', trlValue || data?.trl);
      } catch (error) {
        setTrlOptions([
          { id: 'error', name: `Error fetching other TRL options!` },
        ]);
      }
    };

    fetchData();
  }, []);

  return (
    <span className='min-w-0'>
      <select
        {...register('trl.name')}
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
