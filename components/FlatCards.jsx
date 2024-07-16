import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <View style={styles.headCon}>
        <Text style={styles.headingText}>Flat Cards</Text>
      </View>
      <View style={styles.containerBox}>
        <View style={[styles.card, styles.cardOne]}> 
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    headCon: {
        flex: 1,
        alignItems: 'center',
    },
    containerBox: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#22EF29',
    },
    cardThree: {
        backgroundColor: '#2231FF',
    },
});

export default FlatCards;
