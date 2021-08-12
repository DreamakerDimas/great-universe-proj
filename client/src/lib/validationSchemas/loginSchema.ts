import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string()
      .required('Обязательное поле')
      .email('Не корректная почта. Формат: example@gmail.com'),

  password: Yup.string()
      .required('Обязательное поле')
      .min(6, 'Пароль должен иметь не менее 6 символов')
      .max(30, 'Пароль не должен иметь более 30 символов'),
});

export default loginSchema;
