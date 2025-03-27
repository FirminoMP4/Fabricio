import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    {/* <PrimeiroComponente/>
    <JavaScriptComponente/>
    <Perfil
      
    nome="Fabricio"
      idade= {20}
      email= "algumacoisa@gmail.com"
      telefone= "61984000565"
    />
    <Perfil
      nome="Matheus"
      idade= {24}
      email= "matheus@gmail.com"
      telefone= "61984650565"
    />
    <Perfil
      nome="Dey"
      idade= {20}
      email= "deydey@gmail.com"
      telefone= "61984000578"
    /> */}
    <ListaComponente/>

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
