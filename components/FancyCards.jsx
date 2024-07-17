import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <View style={styles.headCon}>
        <Text style={styles.headingText}>Fancy Cards</Text>
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <View>
            <Image
                source={{
                    uri: 'https://imgs.search.brave.com/WZ3yaouaSl_R6VZ1hhYkqt6LoWT_7ABd9PUcQ5dZHw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDUvZGlzcGxh/eWluZy1pbWFnZXMt/cmVhY3QtbmF0aXZl/LWltYWdlLWNvbXBv/bmVudC5wbmc',
                }}
                style={styles.image}
            />
            <View style={styles.cardBody}>
                <Text style={styles.title}>React Native</Text>
                <Text style={styles.description}>
                    Single code base which supports cross platform
                    capabilities to run on both android and ios.
                </Text>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    headCon: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        height: 220,
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    card: {
        height: 420,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 8,
        elevation: 5,
    },
    cardElevated: {},
    cardBody: {
        // flex: 1,
        // flexGrow: 1,
        paddingHorizontal: 12,
    },
    title: {
        color: '#000',
        fontSize: 22,
    },
    description: {
        color: '#000',
        fontSize: 16,
    },
});
