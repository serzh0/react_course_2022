import React from 'react';

type CardPropsType = {
  title: string;
  price: string;
  imgSource: string;
  weight: string;
  children: React.ReactNode;
};

const Card = ({ title, price, imgSource, weight, children }: CardPropsType) => (
  <li className="list__item">
    <h1 className="title__item">{`${title} (${weight}) гр.`}</h1>
    <img src={imgSource} alt="imgCard" />
    <span className="price">{`${price} ₽`}</span>
    <div>{children}</div>
  </li>
);

export default Card;
