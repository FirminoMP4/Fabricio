import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Municipio from './Municipio'

export default function Estado(props) {

const {nome, sigla, imagem, descricao, municipios} = props

  return (
    <Card Style={{ margin: 10}}>

        <Card.Title title={nome} subtitle={sigla} />
        <Card.Content>
    
            <Text>Descricao: {descricao}</Text>
        </Card.Content>
    <Card.Cover source={{ uri: imagem}}/>
    <Card.Actions >
      <Flatlist
       horizontal
       data={municipios}
       renderItem={({ item }) => (
        <Municipio
        nome={item.nome}
        imagem= {item.imagem}
        />
       )}
      />
    </Card.Actions>

    </Card>
  )
}

const styles = StyleSheet.create({})