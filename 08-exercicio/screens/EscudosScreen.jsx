import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function EscudosScreen () {
    const time = {
        escudo: "https://i.pinimg.com/736x/13/a6/0f/13a60fc265caa8d05fb0c7be29c2c8e5.jpg"
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: time.escudo }} style={styles.escudo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    escudo: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});