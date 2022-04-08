import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './SecondAuthPage.module.scss';

const SecondAuthPage = () => (
  <div className={style.content}>
    <Form title="2nd reg">
      {/* <Input title="Login:" placeholder="Enter your login" id="1" />
        <Input title="Password:" placeholder="Enter your password" id="2" />
        <Button title="Auth" onClick={() => console.log('2nd registration')} /> */}
    </Form>
  </div>
);

export default SecondAuthPage;
