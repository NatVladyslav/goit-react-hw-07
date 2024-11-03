import * as Yup from 'yup';

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  number: Yup.string()
    .required('Phone is required')
    .matches(
      phoneNumberRegex,
      'Invalid phone number. Phone must be +380XXXXXXXXX'
    ),
});
