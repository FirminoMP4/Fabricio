import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import AlunoStack from "./src/screens/Alunos/AlunoStack";



export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AlunoStack/> 
      </NavigationContainer>
    </PaperProvider>
  );
}