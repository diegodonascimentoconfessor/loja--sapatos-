import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, StatusBar, Pressable } from "react-native";  // Importando Pressable
import { Button } from "../components/button";
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
            <Button
                title="Compre Agora"
                onPress={start}
            />
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
        marginTop: 20,  // Espaço entre a imagem e o link
    },
    adminText: {
        fontSize: 16,
        color: '#000A3E',  // Cor do link
        textDecorationLine: 'underline',
    },
    logo: {
        width: '100%',
        height: 400,
        marginBottom: 20  // Ajuste do espaçamento entre a imagem e o restante do conteúdo
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    h2: {
        fontSize: 16,
        marginBottom: 10
    }
});
