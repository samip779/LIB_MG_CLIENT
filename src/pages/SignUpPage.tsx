import React from 'react';
import Header from '../components/Header';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
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
  );
};

export default SignUpPage;
