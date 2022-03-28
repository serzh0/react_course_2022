import React from 'react';
import style from './Card.module.scss';

type CardPropsType = {
  title: string;
  price: string;
  imgSource: string;
  weight: string;
  children: React.ReactNode;
};

const Card = ({ title, price, imgSource, weight, children }: CardPropsType) => (
  <li className={style.list__item}>
    <h1 className={style.title__item}>{`${title} (${weight}) гр.`}</h1>
    <img src={imgSource} alt="imgCard" />
    <span className={style.price}>{`${price} ₽`}</span>
    <div>{children}</div>
  </li>
);

export default Card;
