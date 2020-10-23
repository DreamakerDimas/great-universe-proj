import * as Yup from 'yup';

const loginSchema = Yup.object({
  name: Yup.string().required('Login is required field'),

  password: Yup.string().required('Password is required field'),
});

export default loginSchema;
