import Input from './Input';

import React, { useState } from 'react';
import { loginFields } from '../constants/formFields';

type LoginData = {
  [key: string]: any;
};

const INITIAL_DATA: LoginData = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className='form-control' onSubmit={handleSubmit}>
      {loginFields.map((field) => (
        <Input
          key={field.id}
          placeholder={field.placeholder}
          type={field.type}
          onChange={handleChange}
          name={field.name}
          value={data[field.name]}
        />
      ))}

      <button type='submit' className='btn btn-primary min-w-full mx-auto'>
        Login
      </button>

      <a
        href='#'
        className='text-center text-sm text-button-blue mt-5 hover:text-blue-300'
      >
        Forgot Password?
      </a>
    </form>
  );
};

export default Login;
