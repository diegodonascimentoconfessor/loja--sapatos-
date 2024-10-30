import React, { useState, useEffect } from 'react';
import { View, Text, Pressable,  StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SQLiteDatabase, SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

// Interface para o produto
interface Product {
  id: number;
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
        <WelcomeScreen />
      </SafeAreaView>
    </SQLiteProvider>
  );
}

// Tela inicial (WelcomeScreen)
function WelcomeScreen() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await db.getAllAsync('SELECT * FROM products');
      setProductsList(result as Product[]);
    } catch (error) {
      console.error('Erro ao buscar produtos', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Shoefy!</Text>
      <Pressable style={styles.navigateLink} onPress={() => router.replace('/CadastrarProdutos')}>
        <Text style={styles.navigateLinkText}>Confira nossos Produtos</Text>
      </Pressable>
      {/* Lista de produtos */}
      <FlatList
        data={productsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.productImage} />
            ) : (
              <Text>Sem imagem disponível</Text>
            )}
            <Text style={styles.productCategory}>Categoria: {item.idCategory}</Text>
            <Text style={styles.productTitle}>Título: {item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>Preço: R$ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Função de cadastro de produtos (CadastrarProdutos)

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
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        idCategory TEXT NOT NULL,
        image TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        price TEXT NOT NULL
      );
    `);
    console.log("Tabela 'products' criada com sucesso.");
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 60,
    backgroundColor: '#ffff',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center',
    backgroundColor: '#000A3C',
    color: '#ffffff',
    width: '100%', // Define a largura completa da tela
    paddingVertical: 15, // Adiciona padding vertical para melhorar a aparência
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
  navigateLink: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#000A3C',
    width: '100%', // Define a largura completa da tela
  },
  navigateLinkText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  productItem: {
    padding: 10,
    alignItems: 'center', // Centraliza o conteúdo
    borderBottomWidth: 0,
    borderBottomColor: '#ffff',
  },
  productCategory: {
    fontSize: 16,
    color: '#000A3C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    color: '#03033F',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productImage: {
    width: '100%', 
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});
