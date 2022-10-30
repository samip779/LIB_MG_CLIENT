import React from 'react';
import Header from '../components/Header';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <div className='bg-gray-700 px-4 py-12 rounded-2xl shadow hover:shadow-2xl'>
            <Header
              heading='Create a new account'
              paragraph='Already have an account? '
              linkName='Login'
              linkUrl='/'
            />

            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
