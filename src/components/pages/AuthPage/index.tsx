import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    if (password.length >= 6) {
      setHasError(false);
      console.log({ email, password });
    } else {
      setHasError(true);
      console.log('error');
    }
  };

  useEffect(() => console.log(`Переменная email ${email} изменилась`), [email]);
  useEffect(() => {
    if (password.length >= 6) {
      setHasError(false);
      console.log({ email, password });
    } else if (password.length > 0) {
      setHasError(true);
      console.log('error');
    }
  }, [password]);

  return (
    <div className={style.content}>
      <Form title="Auth">
        <Input
          title="Your email:"
          placeholder="Enter email"
          id="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          title="Your password:"
          placeholder="Enter password"
          id="password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        {hasError && (
          <div className={style.error}>
            <span>Пароль должен быть не меньше 6 символов.</span>
          </div>
        )}

        <Button title="Войти" onClick={submitHandler} />
      </Form>
    </div>
  );
};
export default AuthPage;
