import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button, Card, Text, FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProdutoLista({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  // Carrega os produtos do AsyncStorage
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarProdutos();
    });
    return unsubscribe;
  }, [navigation]);

  async function carregarProdutos() {
    try {
      const jsonValue = await AsyncStorage.getItem('@produtos');
      const lista = jsonValue != null ? JSON.parse(jsonValue) : [];
      setProdutos(lista);
    } catch (e) {
      alert('Erro ao carregar produtos');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>Descrição: {item.descricao}</Text>
              <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>Categoria: {item.categoria}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                icon="pencil"
                onPress={() => navigation.navigate('ProdutoForm', { produto: item })}
              >
                Editar
              </Button>
              <Button
                icon="delete"
                onPress={async () => {
                  const filtrados = produtos.filter((p) => p.id !== item.id);
                  setProdutos(filtrados);
                  await AsyncStorage.setItem('@produtos', JSON.stringify(filtrados));
                }}
                textColor="red"
              >
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      <FAB
        icon="plus"
        onPress={() => navigation.navigate('ProdutoForm')}
        style={styles.fab}
        label="Novo Produto"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});
