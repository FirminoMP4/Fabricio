import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Card, Paragraph, Title } from 'react-native-paper';

export default function JogadoresScreen() {
    const jogadores = [
        {
        nome: "Philippe Coutinho",
        numero: 11,
        imagem: "https://i.pinimg.com/736x/f3/9c/bb/f39cbb829848784a4a1fbf944308a1fb.jpg"
        },
        {
        nome: "Pablo Vegetti",
        numero: 99,
        imagem: "https://i.pinimg.com/736x/8e/0a/7c/8e0a7c6a48fe7b2b52b49cf3fd9a3245.jpg"
        },
        {
        nome: "Dimitri Payet",
        numero: 10,
        imagem: "https://i.pinimg.com/736x/ab/4c/d6/ab4cd62b1e7ae8ad2a67689b9d9f4672.jpg"
        },
        {
        nome: "Benjamín Garré",
        numero: 32,
        imagem: "https://i.pinimg.com/736x/f0/1e/97/f01e971d3c2e32ae1634c45bbcc41990.jpg"
        },
        {
        nome: "Nuno Moreira",
        numero: 22,
        imagem: "https://i.pinimg.com/736x/e7/57/9c/e7579c96d117c41cb70adf8470513012.jpg"
        },
        ];

        const renderItem = ({ item }) => (
            <Card style={styles.card}>
                <Card.Cover source={{ uri: item.imagem }} style={styles.image} />
                <Card.Content>
                    <Title>{item.nome}</Title>
                    <Paragraph>{item.numero }</Paragraph>
                </Card.Content>
    
            </Card>
        );
    
        return (
            <View style={styles.container}>
                <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Jogadores Do Vasco:</Text>
                <FlatList
                    data={jogadores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#808080',
            paddingTop: 10,
            flex: 1
        },
        title: {
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 10
        },
        listContainer: {
            width: '100%',
            paddingHorizontal: 10
        },
        card: {
            width: '100%',
            marginBottom: 10,
            borderRadius: 8
        },
        image: {
            marginTop: 5,
        }
    });