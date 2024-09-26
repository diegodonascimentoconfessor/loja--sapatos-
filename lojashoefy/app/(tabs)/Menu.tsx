// screens/LoginRegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginRegisterScreen() {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e cadastro
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('Login:', username, password);
    navigation.navigate('categoria');
  };

  const handleRegister = () => {
    console.log('Register:', username, email, password);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

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
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 200,
  
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
