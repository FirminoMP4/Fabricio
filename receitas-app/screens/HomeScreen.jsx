import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem: 'https://i.pinimg.com/236x/80/b5/44/80b544b4f56e66fde329b8cf8279e3b3.jpg',
    ingredientes: [/*...*/],
    modoPreparo: [/*...*/]
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    imagem: 'https://i.pinimg.com/236x/ae/fe/5d/aefe5d91ac74b5f9d95c38f1a97cfc38.jpg',
    ingredientes: [/*...*/],
    modoPreparo: [/*...*/]
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    tempoPreparo: "50 minutos",
    porcoes: 12,
    imagem: 'https://i.pinimg.com/236x/ef/d3/0b/efd30bd087d55dc9b51cc77507893531.jpg',
    ingredientes: [/*...*/],
    modoPreparo: [/*...*/]
  }
];

export default function HomeScreen({ navigation }) {

  return (
    <FlatList
      data={receitas}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
          <Card style={{ marginBottom: 16 }}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
              <Title>{item.nome}</Title>
              <Paragraph>{item.tempoPreparo} • {item.porcoes} porções</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}