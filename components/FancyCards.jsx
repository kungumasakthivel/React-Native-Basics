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
            <View style={styles.cardBody}></View>
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
        margin: 20,
        borderRadius: 8,
    },
    card: {},
    cardElevated: {},
    cardBody: {},
});
