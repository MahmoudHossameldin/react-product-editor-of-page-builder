import React from 'react';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useFormContext, Controller } from 'react-hook-form';

const Wysiwyg = () => {
  const { control, watch } = useFormContext();

  watch('description');

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

  return (
    <div>
      <div>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <ReactQuill
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              theme='snow'
              modules={modules}
              formats={formats}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Wysiwyg;
