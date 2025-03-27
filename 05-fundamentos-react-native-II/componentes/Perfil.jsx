import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
  
    console.log("Propiedades ->" , props)

    return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <Text style={styles.texto}>Nome:{props.nome}</Text>
      <Text style={styles.texto}>Idade:{props.idade}</Text>
      <Text style={styles.texto}>telefone:{props.telefone}</Text>
      <Text style={styles.texto}>email:{props.email}</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"yellow",
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 15,
        fontWeight: 600
    }
})