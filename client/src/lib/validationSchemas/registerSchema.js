import * as Yup from 'yup';
import { loginPattern } from '../constants/regexPatterns';

const registerSchema = Yup.object({
  name: Yup.string()
    .required('Обязательное поле')
    .matches(
      loginPattern,
      'Логин должен иметь от 5 до 24 символов и состоять только из букв и цифр'
    ),

  email: Yup.string()
    .required('Обязательное поле')
    .email('Не корректная почта. Формат: example@gmail.com'),

  password: Yup.string()
    .required('Обязательное поле')
    .min(6, 'Пароль должен иметь более 6 символов')
    .max(30, 'Пароль не может иметь более 30 символов'),

  confirmPassword: Yup.string()
    .required('Обязательное поле')
    .oneOf([Yup.ref('password')], 'Не совпадает'),
});

export default registerSchema;
