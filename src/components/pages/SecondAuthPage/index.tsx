import React from 'react';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './SecondAuthPage.module.scss';

const SecondAuthPage = () => (
  <PageWrapper>
    <div className={style.content}>
      <Form title="Вторая авторизация">
        <span>Ваш логин:</span>
        <Input />
        <span>Ваш пароль:</span>
        <Input />
      </Form>
    </div>
  </PageWrapper>
);

export default SecondAuthPage;
