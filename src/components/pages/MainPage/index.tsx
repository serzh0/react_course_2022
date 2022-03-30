import React, { useEffect, useState } from 'react';
import PageWrapper from '../../common/PageWrapper';
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
  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    setListVisible((prev) => !prev);
  };
  return (
    <PageWrapper>
      <h1>User list:</h1>
      <Button title={listVisible ? 'Скрыть список' : 'Показать список'} onClick={handler} />
      {listVisible ? <UserList data={data} /> : <p>Список скрыт</p>}
    </PageWrapper>
  );
};

export default MainPage;
