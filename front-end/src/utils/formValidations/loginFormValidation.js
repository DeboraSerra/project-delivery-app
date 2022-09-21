import * as yup from 'yup';

export const loginFormValidation = yup.object({
  email: yup
    .string('Enter your email')
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(6, 'The password should have at minimum length of 6 characters'),
});
