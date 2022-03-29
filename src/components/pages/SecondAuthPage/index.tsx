import React from 'react';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './SecondAuthPage.module.scss';

const SecondAuthPage = () => (
  <PageWrapper>
    <div className={style.content}>
      <Form title="2nd registration">
        <Input title="Login:" placeholder="Enter your login" id="1" />
        <Input title="Password:" placeholder="Enter your password" id="2" />
      </Form>
    </div>
  </PageWrapper>
);

export default SecondAuthPage;
