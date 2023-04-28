// Import pattern as per company style guide.
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Stack, { Routes } from './src/navigation/stackNavigator';
const { Login, Home } = Routes;

import ScreenA from './src/pages/ScreenA';
import ScreenB from './src/pages/ScreenB';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Login} component={ScreenB} />
        <Stack.Screen name={Home} component={ScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
