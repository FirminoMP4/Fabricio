import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProdutoLista from './ProdutoLista';
import ProdutoForm from './ProdutoForm';

const Stack = createStackNavigator();

export default function ProdutoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProdutoLista"
        component={ProdutoLista}
        options={{ title: 'Lista de Produtos', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="ProdutoForm"
        component={ProdutoForm}
        options={{ title: 'Cadastro de Produto', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
