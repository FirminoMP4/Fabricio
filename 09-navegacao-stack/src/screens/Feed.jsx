import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Feed({navigation, route}) {

  console.log("PARAMS =>", route.params)

  return (
    <View>
      <Text>Feed</Text>
      <Text>Parametro Recebido: {route.params.nome}</Text>


      <Button 
    mode ='contained'
    onpress = {() => navigation.navigate('Posts')}
    >
      ir para Posts
     
    </Button>


    <Button 
    mode ='contained'
    onpress = {() => navigation.goBack()}
    >
    </Button>


    </View>
  )
}

const styles = StyleSheet.create({})