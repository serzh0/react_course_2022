import React, { useEffect } from 'react';
// import FoodShopContainer from './containers/FoodShopContainer';
import { Route, Routes, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import PageWrapper from './components/common/PageWrapper';
import OneUserContainer from './containers/OneUserContainer';
// import SecondAuthContainer from './containers/SecondAuthContainer';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP => start', 'APP - MOUNT'), []);

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<h1>Main page</h1>} />
        <Route path="users" element={<MainContainer />} />
        <Route path="users/:name" element={<OneUserContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="*" element={<h1>Page not found.</h1>} />
      </Route>
    </Routes>
  );
};
export default App;
