import { signUpFields } from '../constants/formFields';
import Input from './Input';

const SignUp = () => {
  return (
    <form className='form-control'>
      {signUpFields.map((field) => (
        <Input
          key={field.id}
          placeholder={field.placeholder}
          type={field.type}
        />
      ))}

      <button className='btn btn-primary min-w-full mx-auto'>Sign Up</button>

      {/* <a href='#' className='text-center text-sm text-gray-200 mt-5'>
        Forgot Password?
      </a> */}
    </form>
  );
};

export default SignUp;
