import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './MainPage.module.scss';
import { data } from '../../../helpers';
import UserList from './UserList';
import Button from '../../common/Button';

// const HeaderStyle = { backgroundColor: 'blue', fontSize: '25px' };
// const FooterStyle = { backgroundColor: 'red', fontSize: '20px' };

// const DescriptionWrapper = styled('div')`
//   color: green;
//   font-size: 32px;
//   margin: 30px;
// `;

const MainPage = () => {
  useEffect(() => console.log('MAIN_PAGE MOUNT'), []);

  const { state } = useLocation() as { state: { isOpen: boolean } };

  const location = useLocation();

  // const mainState: { isOpen: boolean } = location.state as any;

  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    setListVisible((prev) => !prev);
  };

  useEffect(() => {
    if (state?.isOpen) {
      setListVisible(true);
    }
  }, [state?.isOpen]);
  return (
    <>
      <h1>User list:</h1>
      <Button title={listVisible ? 'Скрыть список' : 'Показать список'} onClick={handler} />
      {listVisible ? <UserList data={data} /> : <p>Список скрыт</p>}
    </>
  );
};

export default MainPage;
