import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function ProdutoForm({ navigation, route }) {
  const produtoEdit = route.params ? route.params.produto : null;

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    if (produtoEdit) {
      setNome(produtoEdit.nome);
      setDescricao(produtoEdit.descricao);
      setPreco(produtoEdit.preco.toString());
      setQuantidade(produtoEdit.quantidade.toString());
      setCategoria(produtoEdit.categoria);
    }
  }, [produtoEdit]);

  function validarFormulario() {
    if (
      !nome.trim() ||
      !descricao.trim() ||
      !preco.trim() ||
      isNaN(Number(preco)) ||
      Number(preco) <= 0 ||
      !quantidade.trim() ||
      isNaN(Number(quantidade)) ||
      Number(quantidade) < 0 ||
      !categoria.trim()
    ) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
      return false;
    }
    return true;
  }

  async function salvar() {
    if (!validarFormulario()) return;

    try {
      const jsonValue = await AsyncStorage.getItem('@produtos');
      const lista = jsonValue != null ? JSON.parse(jsonValue) : [];

      if (produtoEdit) {
        // Editar
        const novaLista = lista.map((p) =>
          p.id === produtoEdit.id
            ? {
                ...p,
                nome,
                descricao,
                preco: Number(preco),
                quantidade: Number(quantidade),
                categoria,
              }
            : p
        );
        await AsyncStorage.setItem('@produtos', JSON.stringify(novaLista));
      } else {
        // Novo
        const novoProduto = {
          id: uuid.v4(),
          nome,
          descricao,
          preco: Number(preco),
          quantidade: Number(quantidade),
          categoria,
        };
        lista.push(novoProduto);
        await AsyncStorage.setItem('@produtos', JSON.stringify(lista));
      }

      navigation.goBack();
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar o produto.');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        mode="outlined"
        multiline
        style={styles.input}
      />
      <TextInput
        label="Preço"
        value={preco}
        onChangeText={setPreco}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Categoria"
        value={categoria}
        onChangeText={setCategoria}
        mode="outlined"
        style={styles.input}
      />

      <Button mode="contained" onPress={salvar} style={styles.botao}>
        Salvar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  botao: {
    marginTop: 16,
  },
});
