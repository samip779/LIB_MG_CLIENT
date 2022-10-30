type LoginField = {
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  isRequired: boolean;
  placeholder: string;
};

const signUpFields = [
  {
    placeholder: 'First Name',
    id: 'first-name',
  },
  {
    placeholder: 'Last Name',
    id: 'last-name',
  },
  {
    placeholder: 'Email Address',
    id: 'email-address',
  },
  {
    placeholder: 'Password',
    id: 'password',
  },
  {
    placeholder: 'Confirm Password',
    id: 'confirm-password',
  },
];

const loginFields: LoginField[] = [
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
  },
];

export { loginFields, signUpFields };
