import React from 'react';

interface Props {
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  type,
  onChange,
  name,
  value,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className='input w-full mx-auto mb-5'
      required
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
