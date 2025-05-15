import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Vibration, ActivityIndicator } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const imagensFundo = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', // verde
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', // azul escuro
  'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80', // textura neutra
];

const screenWidth = Dimensions.get('window').width;

export default function MegaSenaScreen() {
  const [numeros, setNumeros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagemFundo, setImagemFundo] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * imagensFundo.length);
    setImagemFundo(imagensFundo[index]);
  }, []);

  const gerarJogo = () => {
    setLoading(true);
    Vibration.vibrate(50);

    setTimeout(() => {
      let jogo = new Set();
      while (jogo.size < 6) {
        const num = Math.floor(Math.random() * 60) + 1;
        jogo.add(num);
      }
      const jogoArray = Array.from(jogo).sort((a, b) => a - b);
      setNumeros(jogoArray);
      setLoading(false);
    }, 800);
  };

  if (!imagemFundo) {
    // enquanto a imagem não foi escolhida, mostra só fundo preto
    return <View style={[styles.fundo, {backgroundColor: 'black'}]} />;
  }

  return (
    <ImageBackground source={{ uri: imagemFundo }} style={styles.fundo} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.conteudo}>
          {loading && <ActivityIndicator size="large" color="#bb86fc" />}
          {!loading && numeros.length > 0 && (
            <Card style={styles.card} elevation={10}>
              <View style={styles.cardFundo}>
                <Text style={styles.titulo}>Números da Mega-Sena</Text>
                <View style={styles.numerosContainer}>
                  {numeros.map((num) => (
                    <View key={num} style={styles.numero}>
                      <Text style={styles.numeroTexto}>{num}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Card>
          )}
        </View>

        <View style={styles.botaoContainer}>
          <Button
            mode="contained"
            onPress={gerarJogo}
            style={styles.botao}
            labelStyle={{ color: 'white', fontWeight: 'bold' }}
            disabled={loading}
          >
            {loading ? 'Gerando...' : 'Gerar Jogo'}
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
    backgroundColor: 'rgba(34,34,34,0.85)',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    color: '#bb86fc',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  numerosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  numero: {
    backgroundColor: '#bb86fc',
    width: (screenWidth * 0.8 - 40) / 6,
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#bb86fc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  numeroTexto: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
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
