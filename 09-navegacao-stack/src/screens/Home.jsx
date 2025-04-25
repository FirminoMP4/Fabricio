import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Home({navigation, route}) {

  console.log('navigation =>', navigation)

    return (
    <View>
      <Text>Home</Text>

    <Button 
    mode ='contained'
    onpress = {() => navigation.navigate('Feed',{id: 1, nome:"João"})}
    >
      ir para Feed
     
     </Button>

    <Button
    mode='contained'
    onPress={() => navigation.goBack()}
    >

    </Button>

    </View>

  
  )
}

const styles = StyleSheet.create({})