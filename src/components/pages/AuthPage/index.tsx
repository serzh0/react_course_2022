import React, { useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = () => {
    console.log({ email, password });
  };
  return (
    <PageWrapper>
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
          <Button title="Auth" onClick={submitHandler} />
        </Form>
      </div>
    </PageWrapper>
  );
};
export default AuthPage;
