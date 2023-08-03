import React from 'react';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { setDescription, useAppDispatch, useAppSelector } from '../store';

const Wysiwyg = () => {
  const dispatch = useAppDispatch();
  const { description } = useAppSelector((state) => state.productEdit);

  const modules = {
    toolbar: [
      [
        'bold',
        'italic',
        { list: 'bullet' },
        { list: 'ordered' },
        { indent: '-1' },
        { indent: '+1' },
        { align: '' },
        { align: 'center' },
        { align: 'right' },
        { align: 'justify' },
        'link',
      ],
    ],
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: false,
    },
  };

  const formats = [
    'bold',
    'italic',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
  ];

  const handleDescriptionChange = (value: string) => {
    dispatch(setDescription(value));
  };

  return (
    <div>
      <div>
        <ReactQuill
          theme='snow'
          modules={modules}
          formats={formats}
          value={description || ''}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
};

export default Wysiwyg;
