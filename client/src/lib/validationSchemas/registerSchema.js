import * as Yup from 'yup';
import { loginPattern } from '../constants/regexPatterns';

const registerSchema = Yup.object({
  name: Yup.string()
    .required('Login cannot be an empty field')
    .matches(
      loginPattern,
      'Name must be between 5 to 24 characters and contain only Latin letters and digits'
    ),

  email: Yup.string()
    .required('Email cannot be an empty field')
    .email('Email not correct. Format: example@gmail.com'),

  password: Yup.string()
    .required('Is required field')
    .min(6, 'Password must be between 6 to 30 characters')
    .max(30, 'Password must be between 6 to 30 characters'),

  confirmPassword: Yup.string()
    .required('Is required field')
    .oneOf([Yup.ref('password')], 'Must match your password'),
});

export default registerSchema;
