import { Text, StyleSheet, View, Avatar, Card } from 'react-native'
import React, { Component } from 'react'

export default function Municipio(props) {
 

  const {nome, imagem } = props
    
    return (
    <Card.Title 
     style={{margin: 10}}
     title= {nome}
     left={(props) => <Avatar.Image {...props} source={{ uri: imagem}} />}

    />

    )
  }

const styles = StyleSheet.create({})