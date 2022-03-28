import React from 'react';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => (
  <PageWrapper>
    <div className={style.content}>
      <Form title="Регистрация">
        <span>Ваше имя:</span>
        <Input />
        <span>Придумайте никнейм:</span>
        <Input />
        <span>Придумайте пароль:</span>
        <Input />
        <span>Повторите пароль:</span>
        <Input />
      </Form>
    </div>
  </PageWrapper>
);

export default RegistrationPage;
