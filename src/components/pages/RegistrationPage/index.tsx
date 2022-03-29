import React from 'react';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './RegistrationPage.module.scss';

const RegistrationPage = () => (
  <PageWrapper>
    <div className={style.content}>
      <Form title="Registration">
        <Input title="Your name:" placeholder="Enter name" id="1" />
        <Input title="Your nickname:" placeholder="Enter nickname" id="1" />
        <Input title="Your password:" placeholder="Enter password" id="1" />
        <Input title="Repeat password:" placeholder="Enter password" id="1" />
      </Form>
    </div>
  </PageWrapper>
);

export default RegistrationPage;
