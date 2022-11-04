import { useState } from 'react';
import { signUpFields } from '../constants/formFields';
import Input from './Input';

type signUpFields = {
  [key: string]: string;
};

const INITIAL_STATE: signUpFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [data, setData] = useState(INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className='form-control'>
      {signUpFields.map((field) => (
        <Input
          key={field.id}
          placeholder={field.placeholder}
          type={field.type}
          onChange={handleChange}
          name={field.name}
          value={data[field.name]}
        />
      ))}

      <button className='btn btn-primary min-w-full mx-auto'>Sign Up</button>
    </form>
  );
};

export default SignUp;
