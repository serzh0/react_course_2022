import React from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  placeholder: string;
  id: string;
};

const Input = ({ title, placeholder, id }: InputPropsType) => (
  <label className={style.input__wrapper} htmlFor={id}>
    <span className={style.input__span}>{title}</span>
    <input placeholder={placeholder} id={id} type="text" />
  </label>
);

export default Input;
