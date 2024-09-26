import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; // Importe useRouter para navegação

const LoginScreen = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        console.log('Login:', username, password);
        router.replace('/home');
    };

    const handleRegister = () => {
        console.log('Register:', username, email, password);
        router.replace('/home'); 
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>{isLogin ? 'Login' : 'Cadastro'}</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={setUsername}
                />

                {!isLogin && (
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                )}

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Pressable
                    style={styles.submitButton}
                    onPress={isLogin ? handleLogin : handleRegister}
                >
                    <Text style={styles.submitButtonText}>
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </Text>
                </Pressable>

                <Pressable
                    style={styles.toggleButton}
                    onPress={() => setIsLogin(!isLogin)}
                >
                    <Text style={styles.toggleButtonText}>
                        {isLogin
                            ? 'Não tem uma conta? Cadastre-se'
                            : 'Já tem uma conta? Faça login'}
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cor de fundo semi-transparente
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
    toggleButton: {
        marginTop: 10,
    },
    toggleButtonText: {
        color: '#005999',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
