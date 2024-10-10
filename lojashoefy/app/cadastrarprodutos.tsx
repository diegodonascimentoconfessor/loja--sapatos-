import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { createTable, insertProduct } from '../services/database'; 
import { useRouter } from 'expo-router'; 

const ProductRegisterScreen = () => {
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const router = useRouter(); 

    useEffect(() => {
        createTable(); 
    }, []);

    const handleRegister = () => {
        if (idCategory && image && title && price) {
            
            insertProduct(Number(idCategory), image, title, description, Number(price));
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!', [
                {
                    text: 'OK',
                    onPress: () => {
                        router.replace('/ProductList'); 
                    },
                },
            ]);
            
            setIdCategory('');
            setImage('');
            setTitle('');
            setDescription('');
            setPrice('');
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro de Produto</Text>

                <TextInput
                    style={styles.input}
                    placeholder="ID da Categoria"
                    value={idCategory}
                    onChangeText={setIdCategory}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder="URL da Imagem"
                    value={image}
                    onChangeText={setImage}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Título do Produto"
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Descrição do Produto"
                    value={description}
                    onChangeText={setDescription}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Preço"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />

                <Pressable
                    style={styles.submitButton}
                    onPress={handleRegister}
                >
                    <Text style={styles.submitButtonText}>Cadastrar Produto</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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

export default ProductRegisterScreen;
