import React from 'react';

interface Props {
  placeholder: string;
}
const Input: React.FC<Props> = ({ placeholder }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='input w-full mx-auto mb-5'
    />
  );
};

export default Input;
