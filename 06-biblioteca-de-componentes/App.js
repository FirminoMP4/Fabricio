import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider  } from 'react-native-paper'

export default function App() {

 const listaCards = [
  { 
    titulo: "Card 1",
    descricao: "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    imagem: 'https://picsum.photos/700'
  },
  { 
    titulo: "Card 2",
    descricao: "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    imagem: 'https://picsum.photos/700'
  },
  { 
    titulo: "Card 3",
    descricao: "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    imagem: 'https://picsum.photos/700'
  },
  { 
    titulo: "Card 4",
    descricao: "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    imagem: 'https://picsum.photos/700'
  }
 ]

  return (
    
    <PaperProvider>

      <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
     
     <FlatList 
    
      data={listaCards}
      renderItem={({ item }) => (
      <Card>
        <Card.Content>
          <Title>{item.titulo}</Title>
          <Paragraph>{item.descricao}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri:item.imagem}}/>
      </Card>
      ) }
     />

    </View>

    </ScrollView>

    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
