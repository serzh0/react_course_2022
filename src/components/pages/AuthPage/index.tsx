import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage = () => (
  <PageWrapper>
    <div className={style.content}>
      <Form title="Auth">
        <Input title="Your login:" placeholder="Enter login" id="1" />
        <Input title="Your password:" placeholder="Enter password" id="1" />
        <Button title="Auth" onClick={() => console.log('Auth')} />
      </Form>
    </div>
  </PageWrapper>
);

export default AuthPage;
