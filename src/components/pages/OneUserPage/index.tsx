import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button';

type OneUserPagePropsType = {
  userInfo: { id: number; name: string; age: string } | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPagePropsType) => {
  console.log(userInfo);

  const navigate = useNavigate();
  const handler = () => {
    navigate('/users', { state: { isOpen: true } });
  };
  return (
    <>
      <h1>User info</h1>
      <h2>{userInfo?.name}</h2>
      <h3>{`Age: ${userInfo?.age}`}</h3>
      <h3>{`ID: ${userInfo?.id}`}</h3>
      <Link to="/users" state={{ isOpen: true }}>
        На список пользователей
      </Link>
      <Button title="Назад" onClick={handler} />
    </>
  );
};

export default OneUserPage;
