import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, StatusBar, Pressable } from "react-native";  // Importando Pressable
import { router } from "expo-router";

export default function Screen() {
    const start = () => {
        router.replace('/home');
    };

    const goToCadastro = () => {
        router.push('/cadastrarprodutos');  
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle="dark-content"  
                backgroundColor="#ffffff"  
            />
             <Pressable onPress={goToCadastro} style={styles.adminLink}>
                <Text style={styles.adminText}>Área Administrativa</Text>
            </Pressable>

            <Image
                source={require('../assets/logo1.png')}
                style={styles.logo}
                resizeMode="cover"
            />

            <Text style={styles.h1}>Loja-Shoefy</Text>
            <Text style={styles.h2}>Qualidade e Conforto.</Text>

            <Pressable onPress={start} style={styles.button}>
                <Text style={styles.buttonText}>Compre Agora</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    adminLink: {
        marginTop: 20,  
    },
    adminText: {
        fontSize: 16,
        color: '#000A3E',  
        textDecorationLine: 'underline',
    },
    logo: {
        width: '100%',
        height: 400,
        marginBottom: 20,
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h2: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000A3C',  // Cor de fundo do botão
        paddingVertical: 15,  // Espaçamento vertical
        paddingHorizontal: 30,  // Espaçamento horizontal
        borderRadius: 10,  // Bordas arredondadas
        alignItems: 'center',  // Centraliza o texto
        justifyContent: 'center',  // Centraliza verticalmente
        marginTop: 20,  // Espaçamento entre o texto e o botão
    },
    buttonText: {
        color: '#ffffff',  // Cor do texto
        fontSize: 18,  // Tamanho da fonte
        fontWeight: 'bold',  // Deixa o texto em negrito
    }
});
