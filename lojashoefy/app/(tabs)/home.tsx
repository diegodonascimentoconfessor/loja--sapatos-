import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";

export default function WelcomeScreen() {
    const products = getAllProducts();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Bem-vindo ao Shoefy!</Text>
                <Text style={styles.subtitle}>Confira nossos produtos:</Text>
            </View>
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
        backgroundColor: '#f5f5f5' 
    },
    header: {
        padding: 20,
        backgroundColor: '#3F89C6',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    title: {
        
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop:20
    },
    subtitle: {
        fontSize: 16,
        color: '#fff' 
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }
});
