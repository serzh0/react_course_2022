import React, { ChangeEvent, useState } from 'react';
import style from './PasswordInput.module.scss';
import closeEye from './close-eye.svg';
import openEye from './open-eye.svg';

type PasswordInputPropsType = {
  title: string;
  placeholder: string;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: 'text' | 'password';
};

const PasswordInput = ({
  title,
  placeholder,
  id,
  value,
  setValue,
}: // type = 'text',

PasswordInputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  let iconPassword = openEye;
  const [type, setType] = useState('text');
  const showPassword = () => {
    if (type === 'text') {
      iconPassword = closeEye;
      setType('password');
    } else if (type === 'password') {
      iconPassword = openEye;
      setType('text');
    }
  };
  return (
    <label className={style.input__wrapper} htmlFor={id}>
      <span className={style.input__span}>{title}</span>
      <div className={style.input__password}>
        <input placeholder={placeholder} id={id} type={type} value={value} onChange={handler} />
        <button className={style['btn-input']} type="button" onClick={showPassword}>
          {' '}
          <img src={iconPassword} alt="icon" />
        </button>
      </div>
    </label>
  );
};
export default PasswordInput;
