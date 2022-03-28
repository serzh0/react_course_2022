import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper: React.FC = ({ children }) => (
  <div className={style.page__wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageWrapper;
