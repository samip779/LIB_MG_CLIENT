import Header from '../components/Header';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <>
      <div className='bg-gray-700 px-4 py-12 rounded-2xl shadow hover:shadow-2xl'>
        <Header
          heading='Login to your account'
          paragraph="Don't have an account yet? "
          linkName='Sign Up'
          linkUrl='/signUp'
        />

        <Login />
      </div>
    </>
  );
};

export default LoginPage;
