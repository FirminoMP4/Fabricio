import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import AppDrawer from './src/routes/AppDrawer';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}
