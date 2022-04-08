import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => (
  <div className={style.page__wrapper}>
    <Header />
    <main className={style.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
