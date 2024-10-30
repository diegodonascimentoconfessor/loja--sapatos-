import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
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
  const [groupedProducts, setGroupedProducts] = useState<{ [key: string]: Product[] }>({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await db.getAllAsync('SELECT * FROM products');
      const products = result as Product[];

      // Agrupa os produtos por categoria
      const grouped = products.reduce((acc: { [key: string]: Product[] }, product) => {
        if (!acc[product.idCategory]) {
          acc[product.idCategory] = [];
        }
        acc[product.idCategory].push(product);
        return acc;
      }, {});
      
      setProductsList(products);
      setGroupedProducts(grouped);
    } catch (error) {
      console.error('Erro ao buscar produtos', error);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.productImage} />
      ) : (
        <Text>Sem imagem disponível</Text>
      )}
      <Text style={styles.productTitle}>Título: {item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>Preço: R$ {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Shoefy!</Text>
      <Pressable style={styles.navigateLink} onPress={() => router.replace('/CadastrarProdutos')}>
        <Text style={styles.navigateLinkText}>Confira nossos Produtos</Text>
      </Pressable>

      {/* Lista de produtos separados por categoria */}
      <FlatList
        data={Object.keys(groupedProducts)}
        keyExtractor={(category) => category}
        renderItem={({ item: category }) => (
          <View>
            <Text style={styles.categoryHeader}>Categoria: {category}</Text>
            <FlatList
              data={groupedProducts[category]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderProduct}
            />
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
    width: '100%',
    paddingVertical: 15,
  },
  navigateLink: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#000A3C',
    width: '100%',
  },
  navigateLinkText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  categoryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000A3C',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  productItem: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 0,
    borderBottomColor: '#ffff',
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
