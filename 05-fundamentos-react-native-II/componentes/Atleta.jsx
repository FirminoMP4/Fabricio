import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Atleta(props) {
  const { nome, idade, numero, imagem } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>Nome {nome}</Text>
      <Text style={styles.texto}>Idade {idade}</Text>
      <Text style={styles.texto}>Numero {numero}</Text>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderWidth: 10,
    padding: 20,
    alignItems: "center",
    flex: 1,
  },
});
