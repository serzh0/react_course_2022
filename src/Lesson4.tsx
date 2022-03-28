import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './Lesson4.css';
import AuthContainer from './containers/AuthContainer';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import SecondAuthContainer from './containers/SecondAuthContainer';

const Lesson4 = () => (
  <>
    <MainContainer />
    <AuthContainer />
    <RegistrationContainer />
    <SecondAuthContainer />
  </>
  // <Routes>
  //   <Route path="/" element={<MainContainer />} />
  //   <Route path="/" element={<RegistrationContainer />} />
  // </Routes>
);

export default Lesson4;
