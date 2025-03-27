import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {
 
    const listaCarros = ["Gol", "Palio", "Celta", "Uno", "BYD"]
 
 
    return (
    <View style={styles.container}>
      
    {listaCarros.map(
        carro => <Text>{carro}</Text>
    ) 
    }
    
    {
   
        listaCarros.map(
            (carro) => {
                return (
                    <View style={styles.containeramarelo}>
                    <Text>{carro}</Text>
                    </View>
                )
            }
        )
    }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        borderWidth: 5,
        padding: 20
    },
    texto: {
        fontSize: 20,
        fontWeight: 500
    },
    containeramarelo: {
        backgroundColor: "yellow",
        borderWidth: 5,
        padding: 15
    }


})