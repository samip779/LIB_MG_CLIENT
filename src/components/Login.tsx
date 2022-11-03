import Input from './Input';
import { loginFields } from '../constants/formFields';

const Login: React.FC = () => {
  return (
    <form className='form-control' onSubmit={(e) => e.preventDefault()}>
      {loginFields.map((field) => (
        <Input
          key={field.id}
          placeholder={field.placeholder}
          type={field.type}
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
