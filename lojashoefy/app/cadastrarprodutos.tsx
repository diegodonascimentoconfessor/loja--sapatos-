import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

interface Product {
    idCategory: string;
    image: string;
    title: string;
    description: string;
    price: string;
}

export default function CadastrarProdutos() {
    const [product, setProduct] = useState<Product>({
        idCategory: '',
        image: '',
        title: '',
        description: '',
        price: '',
    });

    const handleRegister = () => {
        if (product.idCategory && product.image && product.title && product.price) {
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
            // Limpar campos após cadastro
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
        <View>
            <Text>Cadastrar Produto</Text>
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

const styles = StyleSheet.create({
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
