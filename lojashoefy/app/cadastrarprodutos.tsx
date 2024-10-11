import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';  
import { useSQLiteContext, SQLiteProvider } from 'expo-sqlite';

interface Product {
  idCategory: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function App() {
  return (
    <SQLiteProvider databaseName="products.db" onInit={migrateDbIfNeeded}>
      <SafeAreaView style={styles.safeArea}>
        <CadastrarProdutos />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

function CadastrarProdutos() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [product, setProduct] = useState<Product>({
    idCategory: '',
    image: '',
    title: '',
    description: '',
    price: '',
  });

  const handleRegister = async () => {
    if (product.idCategory && product.image && product.title && product.price) {
      try {
        
        await db.runAsync(
          'INSERT INTO products (idCategory, image, title, description, price) VALUES (?, ?, ?, ?, ?)',
          [product.idCategory, product.image, product.title, product.description, product.price]
        );
        
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
        router.push('index');

        // Limpar os campos do formulário
        setProduct({
          idCategory: '',
          image: '',
          title: '',
          description: '',
          price: '',
        });
      } catch (error) {
        console.error('Erro ao salvar o produto no banco de dados', error);
        Alert.alert('Erro', 'Não foi possível cadastrar o produto.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Produto</Text>
      <TextInput
        placeholder="ID Categoria"
        value={product.idCategory}
        onChangeText={(text) => setProduct({ ...product, idCategory: text })}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="URL da Imagem"
        value={product.image}
        onChangeText={(text) => setProduct({ ...product, image: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Título do Produto"
        value={product.title}
        onChangeText={(text) => setProduct({ ...product, title: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={product.description}
        onChangeText={(text) => setProduct({ ...product, description: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Preço"
        value={product.price}
        onChangeText={(text) => setProduct({ ...product, price: text })}
        keyboardType="numeric"
        style={styles.input}
      />
      <Pressable onPress={handleRegister} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Cadastrar Produto</Text>
      </Pressable>
    </View>
  );
}

// Função de migração do banco de dados
async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE products (
        id INTEGER PRIMARY KEY NOT NULL,
        idCategory TEXT NOT NULL,
        image TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        price TEXT NOT NULL
      );
    `);
    currentDbVersion = 1;
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
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
});
