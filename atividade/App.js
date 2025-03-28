import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,  } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

export default function App() {
  const listaFilmes = [
    
    {
      "nome": "Scarface",
      "ano": 1983,
      "diretor": "Brain de Palma",
      "tipo": "Ação",
      "capa": "https://upload.wikimedia.org/wikipedia/pt/9/9c/Scarfaceposter.jpg"
    },
    {
      "nome": "O poderoso chefão",
      "ano": 1972,
      "diretor": "Francis Ford Coppola",
      "tipo": "Drama",
      "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-knYh0S6Knwitxsp96S5LdSgruNpsjGZPg&s"
    },
    {
      "nome": "Pulp Fiction: Tempo de Violência",
      "ano": 1994,
      "diretor": "Quentin tarantino",
      "tipo": "Crime/thriller",
      "capa": "https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg"
    },
    {
      "nome": "Os Sete Crimes Capitais",
      "ano": 1995,
      "diretor": "David Fincher",
      "tipo": "drama",
      "capa": "https://www.cineplayers.com/sites/default/files/posters/2020/04/seven_0.jpg"
    }
  ];

  const listaSeries = [

    {
      "nome": "Familia Soprano",
      "ano": 1999,
      "diretor": "Alex Gibney",
      "temporadas": 6,
      "capa": "https://gringoscds.com.br/produtos/13932/20141223122505_dvd_familia.jpg"
      },
      {
      "nome": "Breaking Bad",
      "ano": 2008,
      "diretor": "Vince Gilligan",
      "temporadas": 7,
      "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGZV4jVq5iq7S7FeUDNTjSuxwuvCI8n0Jfg&s"
      },
      {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
      }

  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          listaFilmes.map(
            filme => {
              return [
                <Filme
                  nome={filme.nome}
                  ano={filme.ano}
                  diretor={filme.diretor}
                  tipo={filme.tipo}
                  capa={filme.capa}
                />
              ]
            }
          )

        }
        {
                listaSeries.map(
                serie => {
                  return [
                    <Serie
                       nome={serie.nome}
                       ano={serie.ano}
                       diretor={serie.diretor}
                      tipo={serie.tipo}
                      capa={serie.capa}
                    />
                  ]
                }
               ) 
              
            }
          

        
      


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

