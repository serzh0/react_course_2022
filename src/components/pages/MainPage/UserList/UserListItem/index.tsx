import React from 'react';
import style from './UserListItem.module.scss';

type UserListItemPropsType = {
  name: string;
  id: number;
  age: string;
};

const UserListItem = ({ name, id, age }: UserListItemPropsType) => (
  <li className={style.list__item}>
    <h3>{name}</h3>
    <span>{`ID: ${id}`}</span>
    <span>{`Age: ${age}`}</span>
  </li>
);

export default UserListItem;
