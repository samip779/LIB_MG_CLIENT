import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

type Props = {
  heading: string;
  paragraph: string;
  linkName?: string;
  linkUrl?: string;
};

const Header: React.FC<Props> = ({
  heading,
  paragraph,
  linkName,
  linkUrl = '#',
}) => {
  return (
    <div className='mb-10'>
      <div className='flex justify-center'>
        <img alt='Library Management' className='h-14 w-14' src={logo} />
      </div>
      <h2 className='mt-6 text-center text-3xl font-bold text-violet-50	'>
        {heading}
      </h2>
      <p className='text-center text-sm text-gray-200 mt-5'>
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className='font-medium text-red-500 hover:text-red-400'
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
