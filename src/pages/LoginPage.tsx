import Header from '../components/Header';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='bg-gray-700 px-4 py-12 rounded-2xl shadow hover:shadow-2xl'>
          <Header
            heading='Login to your account'
            paragraph="Don't have an account yet? "
            linkName='Sign Up'
            linkUrl='/signUp'
          />

          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
