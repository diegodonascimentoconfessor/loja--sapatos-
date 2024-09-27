import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";

export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if (!product) return router.back;

    const comprar = () => {
        alert("você clicou no item " + product.title);
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
                <Button
                    title="comprar agora"
                    onPress={comprar}
                    style={styles.button} // Aplicar estilo personalizado
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    area: {
        flex: 1,
        padding: 10,
    },
    buttonContainer: {
        padding: 10,
        alignItems: 'center', // Centraliza o botão horizontalmente
    },
    button: {
        width: 150, // Define a largura do botão
        height: 45, // Define a altura do botão
        borderRadius: 8, // Bordas arredondadas
        justifyContent: 'center', // Centraliza o texto verticalmente
        alignItems: 'center', // Centraliza o texto horizontalmente
        backgroundColor: '#007bff', // Cor de fundo do botão
    },
    img: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        marginBottom: 20,
        color: '#555555',
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#cccccc',
    },
    price: {
        fontSize: 20,
        textAlign: 'center',
    },
});
