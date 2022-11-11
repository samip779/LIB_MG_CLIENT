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
        <img alt='Library Management' className='h-30 w-100' src={logo} />
      </div>
      <h2 className='mt-6 text-center text-3xl font-bold text-button-blue'>
        {heading}
      </h2>
      <p className='text-center text-sm text-button-blue mt-5'>
        {paragraph}
        <Link
          to={linkUrl}
          className='font-medium text-blue-600 hover:text-blue-400'
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
