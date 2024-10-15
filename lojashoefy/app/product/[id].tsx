import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button, Pressable } from "react-native"; // Utilize o Pressable para estilizar o botão
import { getProductById } from "../../services/product";

export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if (!product) return router.back;

    const comprar = () => {
        alert("Você clicou no item " + product.title);
        router.replace('/Menu'); // Redireciona para a página de "Menu"
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Pressable onPress={comprar} style={styles.button}>
                    <Text style={styles.buttonText}>Comprar Agora</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    area: {
        flex: 1,
        width: '100%',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 60,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#000A3C',  // Cor de fundo do botão
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,  // Bordas arredondadas
        elevation: 3,  // Sombra para Android
        shadowColor: '#000',  // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },  // Sombra para iOS
        shadowOpacity: 0.8,  // Sombra para iOS
        shadowRadius: 2,  // Sombra para iOS
    },
    buttonText: {
        color: '#ffffff',  // Cor do texto
        fontSize: 18,
        fontWeight: 'bold',
    },
    img: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000A3E',
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        color: '#000A3E',
        marginBottom: 10,
        textAlign: 'center',
    },
    priceArea: {
        width: '60%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3B83BE',
    },
});
