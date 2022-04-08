import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={name}>
        <h3>{name}</h3>
      </Link>
    </li>
  );
};

export default UserListItem;
