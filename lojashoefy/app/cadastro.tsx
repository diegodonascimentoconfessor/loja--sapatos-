import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, SafeAreaView, FlatList } from 'react-native';
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
        <CadastrarUsuarios />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

function CadastrarUsuarios() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
  });
  const [usersList, setUsersList] = useState<User[]>([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Estado para mostrar/ocultar a senha

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRegister = async () => {
    if (user.name && user.email && user.password) {
      try {
        await db.runAsync(
          'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
          [user.name, user.email, user.password]
        );

        console.log('Usuário cadastrado:', { ...user });
        await fetchUsers(); // Atualiza a lista de usuários após o cadastro
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');

        // Limpa os campos do formulário
        setUser({
          id: 0,
          name: '',
          email: '',
          password: '',
        });
      } catch (error) {
        console.error('Erro ao salvar o usuário no banco de dados', error);
        Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const fetchUsers = async () => {
    try {
      const result = await db.getAllAsync('SELECT * FROM users');
      setUsersList(result as User[]);
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validação de dados</Text>
      <TextInput
        placeholder="Nome"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={user.password}
        onChangeText={(text) => setUser({ ...user, password: text })}
        secureTextEntry={!isPasswordVisible} // Alterna a visibilidade
        style={styles.input}
      />
      <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.togglePasswordButton}>
        <Text style={styles.togglePasswordText}>{isPasswordVisible ? 'Ocultar' : 'Mostrar'}</Text>
      </Pressable>
      <Pressable onPress={handleRegister} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Confirmar</Text>
      </Pressable>

      {/* Exibe a lista de usuários cadastrados */}
      <FlatList
        data={usersList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>Nome: {item.name}</Text>
            <Text style={styles.userEmail}>Email: {item.email}</Text>
          </View>
        )}
      />
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
        email TEXT NOT NULL,   n
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
    backgroundColor: '#F8F8F8',
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: '#005999',
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
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
});
