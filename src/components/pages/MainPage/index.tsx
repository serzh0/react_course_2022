import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';
import { data } from '../../../helpers';
import UserList from './UserList';

// const HeaderStyle = { backgroundColor: 'blue', fontSize: '25px' };
// const FooterStyle = { backgroundColor: 'red', fontSize: '20px' };

// const DescriptionWrapper = styled('div')`
//   color: green;
//   font-size: 32px;
//   margin: 30px;
// `;

const MainPage = () => (
  <PageWrapper>
    <h1>User list:</h1>
    <UserList data={data} />
  </PageWrapper>
);

export default MainPage;
