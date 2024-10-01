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
        alert("Você clicou no item " + product.title);
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
                    
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        backgroundColor:'#ffffff'
        
    },
    area: {
        
        flex: 1,
        width:'100%',
        padding: 10,
        backgroundColor:'#fffffff'

    },
    buttonContainer: {
        padding: 10,
        alignItems: 'center', 
        marginBottom:60
    },
    button: {
        width: 150, // Define a largura do botão
        height: 45, // Define a altura do botão
        borderRadius: 8, // Bordas arredondadas
        justifyContent: 'center', // Centraliza o texto verticalmente
        alignItems: 'center', // Centraliza o texto horizontalmente
        backgroundColor: '#007bff', 
        marginBottom: 300
    },
    img: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#000A3E',
        textAlign:'center'
    },
    description:{
        fontSize: 20,
        color: '#000A3E',
        marginBottom: 10,
        textAlign:'center'
    },
    priceArea: {
        width: '60%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignSelf: 'center' // Centraliza a área no meio da tela
    },
    
    price:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#3B83BE'
    }

});
