import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <View style={styles.timeContainer}>
      <Image source={{ uri: imagem }} style={styles.timeImage} />
      <Text style={styles.timeNome}>{nome}</Text>
      <Text style={styles.timeInfo}>Fundado em: {anoFundacao}</Text>
      <Text style={styles.timeInfo}>Mascote: {mascote}</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.jogadorContainer}>
            <Image source={{ uri: item.imagem }} style={styles.jogadorImagem} />
            <Text style={styles.jogadorNome}>{item.nome}</Text>
            <Text style={styles.jogadorNumero}>#{item.numero}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.jogadoresLista}
      />
    </View>
  );
};

export default function App() {
  const times = [
    {
      nome: "Flamengo",
      anoFundacao: 1895,
      mascote: "Urubu",
      imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
      jogadores: [
        { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg" },
        { nome: "Arrascaeta", numero: 14, imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg" },
        { nome: "Everton Ribeiro", numero: 7, imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg" },
        { nome: "David Luiz", numero: 23, imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg" },
        { nome: "Pedro", numero: 21, imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg" },
      ],
    },
    {
      nome: "Vasco",
      anoFundacao: 1898,
      mascote: "Almirante",
      imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/120px-CRVascodaGama.png",
      jogadores: [
        { nome: "Payet", numero: 10, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomZYtxXPcByyEw6abfHcP2zdn6vMJU2OYwfS3UB7AP-geP-McWyZF0AIarKC1G7BLCsnur_SDzsaJXyVEza9bRA" },
        { nome: "Gabriel Pec", numero: 11, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJLFy_oJ3A1n29zeOdF8RtXfx00MmGa2MTXhRvN5A8Kkg-Ub6k7gYwfrLog35OZHC4-1aGDx1-DBX0xTIPiaevT-pQlpGlW4WLFhbW0JD_g" },
        { nome: "Léo Jardim", numero: 1, imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/03/21/1580547549-leo-jardim.jpg" },
        { nome: "Paulinho", numero: 7, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNIW-LN-vwr56v6yiaLen1u0VlHCes7-mbA&s" },
        { nome: "Pumita Rodríguez", numero: 2, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI-HgeZNYXdp_rwKqITKutqcUh_nS-Jcoow&s" },
      ],
    },
    {
      nome: "Palmeiras",
      anoFundacao: 1914,
      mascote: "Porco",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
      jogadores: [
        { nome: "Dudu", numero: 7, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjVPLykiWX2fR-I-gzMOx0GagSxKA9vkiEw&s" },
        { nome: "Rony", numero: 10, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgUdYFxVZ_Xcbxu5oH1kEW901k6CBlo5HqQ&s" },
        { nome: "Gustavo Gómez", numero: 15, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSDoMd92gRlpFWvRkRogzve_Ha0GmochkTA&s" },
        { nome: "Weverton", numero: 1, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAUutKhsGHVCEVgk8Zj65IwHCkFsDkfaMYg&s" },
        { nome: "Raphael Veiga", numero: 23, imagem: "https://lncimg.lance.com.br/uploads/2024/10/raphael-veiga-100-gol-palmeiras-fortaleza-campeonato-brasileiro-scaled-aspect-ratio-512-320.jpg" },
      ],
    }
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={times}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Time {...item} />}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  timeContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  timeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  timeNome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  timeInfo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  jogadoresLista: {
    marginTop: 10,
    paddingLeft: 10,
  },
  jogadorContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 120,
  },
  jogadorImagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  jogadorNome: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  jogadorNumero: {
    fontSize: 12,
    color: '#666',
  },
});