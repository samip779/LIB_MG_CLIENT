import Input from './Input';

import { useState } from 'react';
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
  return (
    <form className='form-control'>
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

      <button type='submit' className='btn btn-primary  min-w-full mx-auto'>
        Login
      </button>

      <a
        href='#'
        className='text-center text-sm text-gray-300 mt-5 hover:text-gray-50'
      >
        Forgot Password?
      </a>
    </form>
  );
};

export default Login;
