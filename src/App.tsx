import React, { useEffect } from 'react';
// import FoodShopContainer from './containers/FoodShopContainer';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import SecondAuthContainer from './containers/SecondAuthContainer';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP => start', 'APP - MOUNT'), []);

  return (
    <>
      {/* <FoodShopContainer /> */}
      <MainContainer />
      <AuthContainer />
      {/* <RegistrationContainer />
      <SecondAuthContainer /> */}
    </>
  );
};
export default App;
