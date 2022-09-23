import * as yup from 'yup';

export const checkoutFormValidation = yup.object({
  address: yup
    .string('Enter your address')
    .required('Address is required'),
  number: yup
    .number()
    .required('Please specify your number'),
});
