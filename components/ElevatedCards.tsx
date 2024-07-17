import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
        <View style={styles.headCon}>
            <Text style={styles.headingText}>ElevatedCards</Text>
        </View>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.textColor}>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.textColor}>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.textColor}>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.textColor}>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.textColor}>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.textColor}>Tap</Text>
            </View>
        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    textColor: {
        color: '#000',
    },
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    headCon: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        padding: 8,
        flex: 1,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 5,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 20,
    },
});
