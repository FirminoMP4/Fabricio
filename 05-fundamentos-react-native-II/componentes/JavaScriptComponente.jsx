import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
 
const nome = "Fabricio"
const idade = 20

function checarMaiorIdade() {
    if(idade >= 18) {
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
}
   function alerta(){
    console.log("clicou no botão")
    alert('clicou no botão!!!')
   }

    return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>JavaScriptComponente</Text>
      <Text style={styles.texto}>nome: {nome}</Text>
      <Text style={styles.texto}>idade: {idade}</Text>
      <Text style={styles.texto}>idade+40: {idade + 40}</Text>
      <Text style={styles.texto}>check 18+: {checarMaiorIdade()}</Text>
      
      <Button title='enviar' onPress={alerta} />  
   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: "pink",
    borderWidth: 5,
    padding: 10
    },
    texto:{
        fontSize: 20,
        fontWeight: 500
    }
})