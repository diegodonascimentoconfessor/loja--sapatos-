import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fetchProducts, Product } from '../../services/database'; 

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts(setProducts); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text>Category ID: {item.idCategory}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No products available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductList;
