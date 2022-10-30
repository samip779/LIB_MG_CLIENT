import React from 'react';

interface Props {
  placeholder: string;
  type: string;
}
const Input: React.FC<Props> = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='input w-full mx-auto mb-5'
    />
  );
};

export default Input;
