import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

// Componente de jogador
const Jogador = ({ nome, numero, imagem }) => {
  return (
    <View style={styles.jogadorContainer}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.numero}>Número: {numero}</Text>
      </View>
    </View>
  );
};

// Tela principal
export default function JogadoresScreen() {
  const jogadores = [
    { id: '1', nome: 'Gabigol', numero: 10, imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/11/Gabigol-e1730668092575.jpeg' },
    { id: '2', nome: 'Vagner Love', numero: 8, imagem: 'https://www.ogol.com.br/img/jogadores/32/23532_med_vagner_love.jpg' },
    { id: '3', nome: 'Henrique Dourado', numero: 5, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzawEaHNpZtWYpelZS-C3VMTysFfx_BEynCw&s' },
    { id: '4', nome: 'Gerson', numero: 5, imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/02/gerson-flamengo.webp?w=1200&h=1200&crop=1' },
    { id: '5', nome: 'Pedro', numero: 5, imagem: 'https://tmssl.akamaized.net/images/foto/galerie/pedro-flamengo-2024-1711415068-132753.jpg' },
    { id: '6', nome: 'Bruno Henrique', numero: 5, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkeHY9J5pEgWYf8vOBl08-JsxC6hzJt2d0Q&s' },  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Jogador nome={item.nome} numero={item.numero} imagem={item.imagem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  jogadorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 14,
    color: '#555',
  },
});