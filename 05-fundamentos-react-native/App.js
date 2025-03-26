import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavaScriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
     
     <PrimeiroComponente />
     <SegundoComponente/>
     <JavaScriptComponente/>
     <Perfil 
    nome= "Fabricio"
    sobrenome= "Firmino"
    idade= {20}
      />
       
       <Perfil 
    nome= "Matheus"
    sobrenome= "Bruno"
    idade= {24}
      />

<Perfil 
    nome= "Deyverson"
    sobrenome= "Brito"
    idade= {20}
      />


     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
