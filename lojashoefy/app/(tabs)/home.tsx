import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";
import { useRouter } from 'expo-router'; // Importa useRouter para navegação

export default function WelcomeScreen() {
    const router = useRouter(); // Inicializa o roteador
    const products = getAllProducts();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Bem-vindo ao Shoefy!</Text>
                <Text style={styles.subtitle}>Confira nossos produtos:</Text>
            </View>
            <Pressable style={styles.link} onPress={() =>  router.replace('/ProdutosList')}>
                <Text style={styles.linkText}>Produtos Recentes</Text>
            </Pressable>
            
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
          
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        padding: 20,
        backgroundColor: '#000A3C',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        color: '#fff'
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    },
    link: {
        padding: 15,
        backgroundColor: '#000A3C',
        alignItems: 'center',
        borderRadius: 8,
        margin: 20
    },
    linkText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
