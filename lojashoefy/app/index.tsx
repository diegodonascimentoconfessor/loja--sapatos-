import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, StatusBar } from "react-native";  // Importando StatusBar
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const start = () => {
        router.replace('/home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle="dark-content"  
                backgroundColor="#ffffff"  
            />
            <Image
                source={require('../assets/logo1.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <Text style={styles.h1}>Loja-Shoefy</Text>
            <Text style={styles.h2}>qualidade e Conforto.</Text>
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
    logo: {
        width: '100%',
        height: 400,
        marginBottom: 170
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
