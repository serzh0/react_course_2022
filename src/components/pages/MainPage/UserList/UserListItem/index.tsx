import React, { useEffect } from 'react';
import style from './UserListItem.module.scss';

type UserListItemPropsType = {
  name: string;
  id: number;
  age: string;
};

const UserListItem = ({ name, id, age }: UserListItemPropsType) => {
  useEffect(() => console.log('USER_LIST_ITEM MOUNT'), []);
  return (
    <li className={style.list__item}>
      <h3>{name}</h3>
      <span>{`ID: ${id}`}</span>
      <span>{`Age: ${age}`}</span>
    </li>
  );
};

export default UserListItem;
