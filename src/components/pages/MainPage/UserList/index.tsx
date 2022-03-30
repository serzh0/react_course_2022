import React, { useEffect } from 'react';
import UserListItem from './UserListItem';
import style from './UserList.module.scss';

type UserListPropsType = {
  data: { id: number; name: string; age: string }[];
};

const UserList = ({ data }: UserListPropsType) => {
  useEffect(() => {
    const clickHandler = () => {
      console.log('click');
    };
    console.log('USER_LIST MOUNT');
    document.addEventListener('click', clickHandler);

    return () => {
      console.log('USER_LIST UNMOUNT');
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <ul className={style.list}>
      {data.map((el) => (
        <UserListItem key={el.id} name={el.name} id={el.id} age={el.age} />
      ))}
    </ul>
  );
};

export default UserList;
