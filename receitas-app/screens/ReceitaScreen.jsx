// screens/ReceitaScreen.jsx
import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Title, Paragraph, Text } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image source={{ uri: receita.imagem }} style={{ height: 200, borderRadius: 8, marginBottom: 16 }} />
      <Title>{receita.nome}</Title>
      <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>Porções: {receita.porcoes}</Paragraph>

      <Text style={{ marginTop: 16, fontWeight: 'bold' }}>Ingredientes:</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <Text style={{ marginTop: 16, fontWeight: 'bold' }}>Modo de Preparo:</Text>
      {receita.modoPreparo.map((passo, index) => (
        <Text key={index}>{passo}</Text>
      ))}
    </ScrollView>
  );
}
