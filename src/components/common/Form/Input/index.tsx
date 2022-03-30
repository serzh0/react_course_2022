import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  placeholder: string;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
};

const Input = ({ title, placeholder, id, value, setValue, type = 'text' }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label className={style.input__wrapper} htmlFor={id}>
      <span className={style.input__span}>{title}</span>
      <input placeholder={placeholder} id={id} type={type} value={value} onChange={handler} />
    </label>
  );
};
export default Input;
