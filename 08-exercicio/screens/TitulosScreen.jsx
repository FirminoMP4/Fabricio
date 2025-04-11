import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Card, Paragraph, Title } from 'react-native-paper';

export default function TitulosScreen() {
    const titulos = [
        {
            nome: "Campeonato Brasileiro",
            anos: [1974, 1989, 1997, 2000],
            imagem: 'https://i.pinimg.com/736x/b4/f5/c4/b4f5c4f4594f23f3513da0660e3a7c3a.jpg'
        },
        {
            nome: "Copa Libertadores da América",
            anos: [1998],
            imagem: 'https://i.pinimg.com/736x/e0/44/d6/e044d638194e80d8a254f1678588dc87.jpg'
        },
        {
            nome: "Copa do Brasil",
            anos: [2011],
            imagem: 'https://i.pinimg.com/736x/ac/91/00/ac910008ebf2e8e8a565c5869ad63c17.jpg'
        },
        
    ];

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
                <Title>{item.nome}</Title>
                <Paragraph>{item.anos.join(', ')}</Paragraph>
            </Card.Content>

        </Card>
    );

    return (
        <View style={styles.container}>
            <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Títulos Do Vasco</Text>
            <FlatList
                data={titulos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 10,
        flex: 1
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 10
    },
    card: {
        marginBottom: 10,
        borderRadius: 8
    }
});