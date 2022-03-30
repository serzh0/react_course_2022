import React, { useEffect } from 'react';
import MainPage from '../../components/pages/MainPage';

const MainContainer = () => {
  useEffect(() => console.log('MAIN_CONTAINER MOUNT'), []);

  return <MainPage />;
};

export default MainContainer;
