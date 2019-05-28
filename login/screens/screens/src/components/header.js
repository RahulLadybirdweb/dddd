import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => (
    <View style={styles.container}><Text style={styles.header}>INBOX</Text></View>
  );
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#154C66',
    shadowColor: '#154C66',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10
  },
  header: {
     fontSize: 20,
     color: '#fff',
     padding: 20,
     shadowColor: '#154C66',
     shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 10
  },
});
// skip this line if using Create React Native App
export default Header;
