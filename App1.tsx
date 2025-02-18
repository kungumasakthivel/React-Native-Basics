import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App1(): JSX.Element { // return is JSX element
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <View style={
        styles.container
        }>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default App1;
