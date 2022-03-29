import React from 'react';
import Counter from '../../common/Counter';
import NameComponent from '../../common/NameComponent';
import PageWrapper from '../../common/PageWrapper';
// import styled from 'styled-components';
import style from './MainPage.module.scss';

// const HeaderStyle = { backgroundColor: 'blue', fontSize: '25px' };
// const FooterStyle = { backgroundColor: 'red', fontSize: '20px' };

// const DescriptionWrapper = styled('div')`
//   color: green;
//   font-size: 32px;
//   margin: 30px;
// `;

const MainPage = () => (
  <PageWrapper>
    <main className={style.content}>
      <div className={style.content__wrapper}>
        <h1>main content</h1>
        <h2>Its my friends:</h2>
        <NameComponent firstName="Alex" lastName="Yu." />
        <NameComponent firstName="Max" lastName="Yu." />
        <NameComponent firstName="Evgeniy " lastName="Kos." />
        <h1>My cart</h1>
        <Counter title="Potato" />
        <Counter title="Orange" />
      </div>
    </main>
  </PageWrapper>
);

export default MainPage;
