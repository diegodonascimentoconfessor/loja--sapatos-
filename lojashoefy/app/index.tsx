import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen() {
    const insets = useSafeAreaInsets();

    const start = () => {
        router.replace('/home');
    };

    return (
        <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
            <View style={styles.container}>
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
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
      width:'100%',
      height:300,
        backgroundColor: '#ffffff',
    },
    container: {
      width:'90%',
      height:300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: 400,
        marginBottom: 170,
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 80,
    },
    h2: {
        fontSize: 16,
        marginBottom: 10,
    },
    
});
