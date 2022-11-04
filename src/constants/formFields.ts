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
    type: 'string',
    name: 'firstName',
  },
  {
    placeholder: 'Last Name',
    id: 'last-name',
    type: 'string',
    name: 'lastName',
  },
  {
    placeholder: 'Email Address',
    id: 'email-address',
    type: 'email',
    name: 'email',
  },
  {
    placeholder: 'Password',
    id: 'password',
    type: 'password',
    name: 'password',
  },
  {
    placeholder: 'Confirm Password',
    id: 'confirm-password',
    type: 'password',
    name: 'confirmPassword',
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
