import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { createTable, insertProduct, fetchProducts, Product } from '../services/database'; 
import { useRouter } from 'expo-router';

const ProductForm: React.FC = () => {
  const [idCategory, setIdCategory] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter(); // Inicializando o useRouter

  useEffect(() => {
    createTable(); 
    fetchProducts(setProducts); 
  }, []);

  const handleSubmit = () => {
    if (idCategory && image && title && description && price) {
      insertProduct(idCategory, image, title, description, price);
      fetchProducts(setProducts); 
      router.push('/home'); // Navegando para a rota "home" após a inserção do produto
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category ID:</Text>
      <TextInput
        style={styles.input}
        value={String(idCategory)}
        onChangeText={text => setIdCategory(Number(text))}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Image URL:</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />

      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={String(price)}
        onChangeText={text => setPrice(Number(text))}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} />

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductForm;
