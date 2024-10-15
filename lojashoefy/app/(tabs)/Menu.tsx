import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SQLiteDatabase, SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function App() {
  return (
    <SQLiteProvider databaseName="users.db" onInit={migrateDbIfNeeded}>
      <SafeAreaView style={styles.safeArea}>
        <Login />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

function Login() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Estado para mostrar/ocultar a senha

  const handleLogin = async () => {
    if (email && password) {
      try {
        const result = await db.getAllSync(
          'SELECT * FROM users WHERE email = ? AND password = ?',
          [email, password]
        );

        if (result.length > 0) { // Verifica se há resultados
          console.log('Usuário logado:', result);
          Alert.alert('Sucesso', 'Login realizado com sucesso!', [
            {
              text: 'OK',
              onPress: () => {
                router.replace('/home'); // Redireciona para a página /home
              },
            },
          ]);
        } else {
          Alert.alert('Erro', 'Email ou senha incorretos.');
        }
      } catch (error) {
        console.error('Erro ao verificar o usuário no banco de dados', error);
        Alert.alert('Erro', 'Não foi possível realizar o login.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const handleSignUpRedirect = () => {
    router.push('/cadastro'); // Redireciona para a página de cadastro
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo1.png')}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible} // Alterna a visibilidade
        style={styles.input}
      />
      <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.togglePasswordButton}>
        <Text style={styles.togglePasswordText}>{isPasswordVisible ? 'Ocultar' : 'Mostrar'}</Text>
      </Pressable>
      <Pressable onPress={handleLogin} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Login</Text>
      </Pressable>
      <Text style={styles.toggleModeText} onPress={handleSignUpRedirect}>
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
}

// Função de migração do banco de dados
async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;

  const result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  const currentDbVersion = result ? result.user_version : 0;

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentDbVersion === 0) {
    await db.execAsync(`PRAGMA journal_mode = 'wal';`);
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);
    console.log("Tabela 'users' criada com sucesso.");
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 300, // Ajuste o tamanho da imagem conforme necessário
    height: 300, // Ajuste o tamanho da imagem conforme necessário
    alignSelf: 'center', // Centraliza a imagem
    marginBottom: 10, // Espaço abaixo da imagem
    marginTop:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#000A3C',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  togglePasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  togglePasswordText: {
    fontSize: 16,
    color: '#005999',
  },
  toggleModeText: {
    fontSize: 16,
    color: '#005999',
    textAlign: 'center',
    marginTop: 20,
  },
});
