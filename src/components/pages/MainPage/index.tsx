import React from 'react';
import styled from 'styled-components';
import style from './MainPage.module.scss';

const HeaderStyle = { backgroundColor: 'blue', fontSize: '25px' };
const FooterStyle = { backgroundColor: 'red', fontSize: '20px' };

// const DescriptionWrapper = styled('div')`
//   color: green;
//   font-size: 32px;
//   margin: 30px;
// `;

const MainPage = () => (
  <div className={style.page__wrapper}>
    <header className={style.header}>
      <h1>header</h1>
    </header>
    <main className={style.content}>
      <h1>main content</h1>
    </main>
    {/* <DescriptionWrapper>
      <p>description</p>
    </DescriptionWrapper> */}
    <footer className={style.footer}>
      <h1>footer</h1>
    </footer>
  </div>
);

export default MainPage;
