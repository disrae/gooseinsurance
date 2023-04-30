// React imports.
import React from 'react';
import { Provider } from 'react-redux';
// Navigation imports.
import { NavigationContainer } from '@react-navigation/native';
import MainNavigationStack from './src/navigation';
// Redux imports.
import store from './src/redux/store';
// Self imports: components, pages, styles, resources.

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigationStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
