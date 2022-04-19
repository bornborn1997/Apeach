import React from 'react';
import { SafeAreaView, StyleSheet, Text,}from 'react-native';
import Navigation from './src/navigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={styles.root} >
    <Navigation/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
     flex: 1, 
    backgroundColor:'#f9fbfc',
  },
});
export default App;
