//imports
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

//Componente principal
//ele deve retornar oque ser[a renderizado na tela (template feito com JSX)
export default function App() {
  //logica do componente
  const nome = "Cristiano Ronaldo";

  function alerta() {
    alert("Gol do Cristiano Ronaldo/ Flamengo");
  }
  //retorno com JSX
  return (
    <ScrollView>
     
      <View style={styles.container}>
        {/*comenario do template JSX*/}

        {/* Código Javascript*/}
        <Text style={styles.textoGrande}> {nome}</Text>
        <Text style={styles.textoGrande}>{1 + 6}</Text>

        <Text style>Atacante</Text>
        <StatusBar style="auto" />

        <Button title="GOL" onPress={alerta} color="#FDFBEE"></Button>

        <Image
          source={{
            uri: "https://i.pinimg.com/736x/f7/4b/29/f74b29e283f09559126d04941101ee53.jpg",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Text style={styles.textoGrande}>Altura:1.90</Text>
        <Image
          source={require("./imagens/download3.jpg")}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Text style={styles.textoGrande}>bonito</Text>
        <Image
          source={require("./imagens/download2.jpg")}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Text style={styles.textoGrande}>100000 GOLS NA CARREIRA</Text>
        <Image
          source={require("./imagens/download1.jpg")}
          style={{
            height: 300,
            width: 300,
          }}
        />

        <Image
          source={require("./imagens/download4.jpg")}
          style={{
            height: 300,
            width: 300,
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A31D1D",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  textoGrande: {
    fontSize: 30,
    fontWeight: 900,
    fontStyle: "italic",
  },
});
