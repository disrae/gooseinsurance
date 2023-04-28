// Import pattern as per company style guide.
import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigation/MainStackNavigator';

import Home from './src/pages/ScreenA/Home';
import Login from './src/pages/ScreenB/Login';
import Products, { AccountTabNavigator } from './src/pages/ScreenC/Products';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Products'} component={AccountTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
