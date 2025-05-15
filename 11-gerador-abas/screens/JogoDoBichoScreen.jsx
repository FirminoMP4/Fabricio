import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Dimensions, Vibration, ActivityIndicator } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const animais = [
    { nome: 'Macaco', imagem: 'https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg' },
    { nome: 'Elefante', imagem: 'https://www.infoescola.com/wp-content/uploads/2016/12/elefante-asiatico-198685685.jpg' },
    { nome: 'Cobra', imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Indiancobra.jpg' },
    { nome: 'Leão', imagem: 'https://static.todamateria.com.br/upload/le/ao/leaojuba-cke.jpg' },
    { nome: 'Tigre', imagem: 'https://i1.sndcdn.com/artworks-zlMk6zBIsGWhWoPl-zTF06A-t500x500.jpg' },
    { nome: 'Urso', imagem: 'https://recreio.com.br/media/_versions/legacy/2021/12/09/urso-1233305_widexl.jpg' },
    { nome: 'Cavalo', imagem: 'https://s2-globorural.glbimg.com/Rlg2WWmtr4SRKeAeyfHNGhhck0A=/0x0:2048x1365/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2022/O/u/ScjrXaRWWJoe0vrYCKsA/50723292993-09523e81cb-k.jpg' },
    { nome: 'Porco', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kYl-zBPj9aqVNtu5tbt6SEB29swQovcXgw&s' },
    { nome: 'Vaca', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qJ2Fb5DKCFC5vD4n_U64mSDl2P45IhZnZw&s' },
    { nome: 'Galo', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtupsKggHLuAGNHLAWHGRnz6CRHD5W9a7_Q&s' },
    ];
    

const imagemFundo = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
const screenWidth = Dimensions.get('window').width;

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);
  const [loading, setLoading] = useState(false);

  const gerarAnimal = () => {
    setLoading(true);
    Vibration.vibrate(50);
    setTimeout(() => {
      const index = Math.floor(Math.random() * animais.length);
      setAnimalGerado(animais[index]);
      setLoading(false);
    }, 800);
  };

  return (
    <ImageBackground source={{ uri: imagemFundo }} style={styles.fundo} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.conteudo}>
          {loading && <ActivityIndicator size="large" color="#bb86fc" />}
          {!loading && animalGerado && (
            <Card style={styles.card} elevation={10}>
              <View style={styles.cardFundo}>
                <View style={styles.cardHeader}>
                  <Icon name={animalGerado.icone} size={36} color="#bb86fc" />
                  <Text style={styles.textoTitulo}>{animalGerado.nome}</Text>
                </View>
                <Image source={{ uri: animalGerado.imagem }} style={styles.imagem} />
              </View>
            </Card>
          )}
        </View>

        <View style={styles.botaoContainer}>
          <Button
            mode="contained"
            onPress={gerarAnimal}
            style={styles.botao}
            labelStyle={{ color: 'white', fontWeight: 'bold' }}
            disabled={loading}
          >
            {loading ? 'Gerando...' : 'Gerar Animal'}
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardFundo: {
    backgroundColor: 'rgba(34,34,34,0.85)', // Fundo escuro semitransparente para destacar conteúdo
    padding: 20,
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  textoTitulo: {
    color: '#bb86fc',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 12,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  imagem: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    borderRadius: 20,
  },
  botaoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: 'rgba(187,134,252,0.3)',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  botao: {
    width: '100%',
    backgroundColor: '#bb86fc',
  },
});
