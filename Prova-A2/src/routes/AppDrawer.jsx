import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProdutoStack from './screens/ProdutoStack';


// Futuramente você cria ClienteStack e PedidoStack também

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Produtos" component={ProdutoStack} />
      {/* Adicione ClienteStack e PedidoStack aqui */}
    </Drawer.Navigator>
  );
}
