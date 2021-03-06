import React from 'react';
import Form from '../../../Form';
import Input from '../../../Input';
import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage = () => (
  <PageWrapper>
    <div className={style.content}>
      <Form title="Авторизация">
        <span>Ваш логин:</span>
        <Input />
        <span>Ваш пароль:</span>
        <Input />
      </Form>
    </div>
  </PageWrapper>
);

export default AuthPage;
