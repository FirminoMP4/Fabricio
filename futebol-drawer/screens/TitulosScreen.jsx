import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import React from 'react'

const TituloCard = ({ titulo, ano, imagem }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: imagem }} style={styles.imagem} imageStyle={{ borderRadius: 20 }}>
        <View style={styles.overlay}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.ano}>Ano: {ano}</Text>
    </View>
  );
};

export default function TitulosScreens() {
    const titulos = [
        {
          id: '1',
          titulo: 'Libertadores',
          ano: '1981, 2019, 2022',
          imagem: 'https://lncimg.lance.com.br/uploads/2022/10/29/635db130b4e61.jpeg',
        },
        {
          id: '2',
          titulo: 'Brasileirão',
          ano: '1980, 1982, 1983, 1987, 1992, 2009, 2019, 2020',
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodhJ1HsY46nMvif_mPjXzA5sz-BgLHR5FhQ&s',
        },
        {
          id: '3',
          titulo: 'Copa do Brasil',
          ano: '1990, 2006, 2013, 2022',
          imagem: 'https://s2-oglobo.glbimg.com/W3IrplykNCP8h21FPdGJ5cw6C2A=/0x0:6048x4024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/8/7/q1v4guSFWV64q08Dv6ew/109112329-topshot-flamengo-players-celebrate-with-the-trophy-after-winning-the-brazil-cup-final-se-1-.jpg',
        },
        {
          id: '4',
          titulo: 'Supercopa',
          ano: '2020, 2021',
          imagem: 'https://tntsports.com.br/__export/1618161741401/sites/esporteinterativo/img/2021/04/11/51109605858_0ffcd4e275_k_1.jpg',
        },
      ];
        

  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TituloCard titulo={item.titulo} ano={item.ano} imagem={item.imagem} />
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  ano: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
    marginLeft: 4,
  },
});