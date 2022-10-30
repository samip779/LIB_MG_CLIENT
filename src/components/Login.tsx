import React from 'react';
import Input from './Input';
import { loginFields } from '../constants/formFields';

// let fields = loginFields;

const Login: React.FC = () => {
  return (
    <form className='form-control'>
      {loginFields.map((field) => (
        <Input key={field.id} placeholder={field.placeholder} />
      ))}

      <button className='btn btn-primary  min-w-full mx-auto'>Login</button>

      <a href='#' className='text-center text-sm text-gray-200 mt-5'>
        Forgot Password?
      </a>
    </form>
  );
};

export default Login;
