import React from 'react';
// import Input from '../../../Input';
import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};
// const Form: React.FC<FormPropsType> = ({ title, children }) => (
const Form = ({ title, children }: FormPropsType) => (
  <div className={style.form}>
    <h1>{title}</h1>
    <div className={style['form-input__wrapper']}>{children}</div>
  </div>
);

export default Form;
