import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const submitHandler = () => {
    if (password.length >= 6) {
      setHasError(false);
      console.log({ email, nickName, password });
    } else {
      setHasError(true);
      console.log('error');
    }
  };
  useEffect(() => {
    if (nickName.length >= 3) {
      setHasError(false);
      console.log({ nickName });
    } else if (nickName.length > 0) {
      setHasError(true);
      console.log('error nickname');
    }
  }, [nickName]);
  useEffect(() => {
    if (password.length >= 6) {
      setHasError(false);
      console.log({ password });
    } else if (password.length > 0) {
      setHasError(true);
      console.log('error password');
    }
  }, [password]);

  return (
    <PageWrapper>
      <div className={style.content}>
        <Form title="Registration">
          <Input
            title="Your nickname:"
            placeholder="Enter nickname"
            id="1"
            value={nickName}
            setValue={setNickName}
          />
          <Input
            title="Your email:"
            placeholder="Enter email"
            id="1"
            value={email}
            setValue={setEmail}
          />
          <Input
            title="Your password:"
            placeholder="Enter password"
            id="1"
            value={password}
            setValue={setPassword}
          />
          <Input
            title="Repeat password:"
            placeholder="Enter password"
            id="1"
            value={password}
            setValue={setPassword}
          />
          {hasError && (
            <div className={style.error}>
              <span>Пароль должен быть больше 6 символов</span>
            </div>
          )}

          <Button title="Auth" onClick={submitHandler} />
        </Form>
      </div>
    </PageWrapper>
  );
};

export default RegistrationPage;
