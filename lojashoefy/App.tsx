import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { initDatabase } from './services/database';

const App: React.FC = () => {
  useEffect(() => {
    // Inicializa o banco de dados quando o app é carregado
    initDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao seu aplicativo!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
