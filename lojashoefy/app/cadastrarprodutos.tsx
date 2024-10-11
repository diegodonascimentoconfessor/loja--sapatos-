import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';


interface Product {
    idCategory: string;
    image: string;
    title: string;
    description: string;
    price: string;
}

export default function CadastrarProdutos() {
    const router = useRouter(); // Use the router hook
    const [product, setProduct] = useState<Product>({
        idCategory: '',
        image: '',
        title: '',
        description: '',
        price: '',
    });

    const handleRegister = () => {
        // Check if all required fields are filled
        if (product.idCategory && product.image && product.title && product.price) {
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');

            // Navigate to another screen after registration
            router.push('/index'); // Adjust to your screen path

            // Clear fields after registration
            setProduct({
                idCategory: '',
                image: '',
                title: '',
                description: '',
                price: '',
            });
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
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
        </SafeAreaView>
    );
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
