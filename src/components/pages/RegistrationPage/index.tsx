/* eslint-disable operator-linebreak */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/Input/PasswordInput';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const [hasErrorForm, setHasErrorForm] = useState(false);
  const [hasErrorNickName, setHasErrorNickName] = useState(false);
  const [hasErrorEmail, setHasErrorEmail] = useState(false);
  const [hasErrorPassword, setHasErrorPassword] = useState(false);
  const [hasErrorPasswordRepeat, setHasErrorPasswordRepeat] = useState(false);

  const validMail = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setHasErrorEmail(false);
    } else if (email.length > 0) {
      setHasErrorEmail(true);
    }
  };

  const submitHandler = () => {
    if (
      // работает не корректно
      hasErrorNickName === false &&
      hasErrorEmail === false &&
      hasErrorPassword === false &&
      hasErrorPasswordRepeat === false
    ) {
      setHasErrorForm(false);
      console.log('Вы успешно зарегистированы. ');
      console.log({ nickName, email, password });
    } else {
      setHasErrorForm(true);
      console.log('error form');
    }
  };
  useEffect(() => {
    if (nickName.length >= 3 && nickName.length < 15) {
      setHasErrorNickName(false);
    } else if (nickName.length > 0) {
      setHasErrorNickName(true);
    }
  }, [nickName]);

  useEffect(() => {
    validMail();
  }, [email]);

  useEffect(() => {
    if (password.length >= 6 && password.length < 25) {
      setHasErrorPassword(false);
    } else if (password.length > 0) {
      setHasErrorPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (password === passwordRepeat) {
      setHasErrorPasswordRepeat(false);
    } else {
      setHasErrorPasswordRepeat(true);
    }
  }, [passwordRepeat]);

  return (
    <div className={style.content}>
      <Form title="Registration">
        <Input
          title="Your nickname:"
          placeholder="Enter nickname"
          id="name"
          value={nickName}
          setValue={setNickName}
        />
        {hasErrorNickName && (
          <div className={style.error}>
            <span>Никнейм должен быть от 3 до 15 символов</span>
          </div>
        )}
        <Input
          title="Your email:"
          placeholder="Enter email"
          id="email"
          value={email}
          setValue={setEmail}
        />
        {hasErrorEmail && (
          <div className={style.error}>
            <span>Почта введена не корректно</span>
          </div>
        )}
        <PasswordInput
          title="Your password:"
          placeholder="Enter password"
          id="password"
          value={password}
          setValue={setPassword}
          // type="password"
        />
        {hasErrorPassword && (
          <div className={style.error}>
            <span>Пароль должен быть от 6 до 25 символов</span>
          </div>
        )}
        <PasswordInput
          title="Repeat password:"
          placeholder="Enter password"
          id="repeatPassword"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          // type="password"
        />
        {hasErrorPasswordRepeat && (
          <div className={style.error}>
            <span>Пароли должны совпадать</span>
          </div>
        )}

        <Button title="Auth" onClick={submitHandler} />
      </Form>
    </div>
  );
};

export default RegistrationPage;
