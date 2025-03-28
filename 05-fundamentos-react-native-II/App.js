import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import JavaScriptComponente from "./componentes/JavaScriptComponente";
import Perfil from "./componentes/Perfil";
import ListaComponente from "./componentes/ListaComponente";
import Atleta from "./componentes/Atleta";

export default function App() {
  const listaAtletas = [
    {
      nome: "Caça rato",
      idade: 37,
      numero: 10,
      
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {listaAtletas.map((atleta) => {
          return (
            <Atleta
              nome={atleta.nome}
              idade={atleta.idade}
              numero={atleta.numero}
              imagem={atleta.imagem}
            />
          );
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
