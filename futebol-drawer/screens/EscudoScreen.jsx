import { StyleSheet, View } from 'react-native'
import { Text, Card, Title } from 'react-native-paper'
import React from 'react'

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.titulo}>
        Clube de Regatas do Flamengo
      </Text>

      <Card style={styles.card} elevation={5}>
        <Card.Cover 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqfxMSnNxUaiiLY2a-K9KIgkl6_tjeY331Q&s' }} 
          style={styles.imagem}
        />
        <Card.Content>
          <Title style={styles.cardTitle}>FLAMENGOOO 🔴⚫</Title>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#d00000',
  },
  card: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imagem: {
    height: 300,
  },
  cardTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000',
  },
})