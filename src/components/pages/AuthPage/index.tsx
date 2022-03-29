import React from 'react';
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
      </Form>
    </div>
  </PageWrapper>
);

export default AuthPage;
