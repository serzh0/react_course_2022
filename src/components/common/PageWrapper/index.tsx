import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper: React.FC = ({ children }) => (
  <div className={style.page__wrapper}>
    <Header />
    <main className={style.content}>{children}</main>
    <Footer />
  </div>
);

export default PageWrapper;
