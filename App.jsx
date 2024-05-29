import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNaviagtor from './src/router/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNaviagtor />
    </NavigationContainer>
  );
};

export default App;
