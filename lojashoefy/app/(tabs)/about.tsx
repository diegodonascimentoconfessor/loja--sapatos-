import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

export default function Screen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Image
                source={require('../../assets/logo2.png')} 
                style={styles.logo2} 
                resizeMode="cover"
            />
            <View style={styles.container}>
                <Text style={styles.title}> Lojas-Shoefy</Text>
                <Text style={styles.description}>
                    O Shoefy é um aplicativo de gerenciamento e compra de sapatos, desenvolvido com um forte foco em tecnologia e usabilidade. Criado para atender tanto entusiastas de moda quanto profissionais da área de vendas, o Shoefy visa transformar a experiência de compra de calçados por meio de soluções tecnológicas avançadas.

                    Tecnologias Utilizadas:

                    React Native: O Shoefy é construído usando React Native, uma poderosa framework para o desenvolvimento de aplicações móveis nativas. React Native permite que o aplicativo ofereça uma experiência de usuário fluida e responsiva, aproveitando o mesmo código base para iOS e Android. Isso garante uma performance otimizada e uma interface de usuário consistente, com transições suaves e interações rápidas.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff', 
    },
    logo2: { 
        width: '70%', 
        height: 200, 
        borderRadius: 20, 
        marginTop: 60, 
        alignSelf: 'center', 
    },
    container: {
        width:'100%',
        height:400,
        justifyContent: 'center',
        padding: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center', 
        color: '#000A3C', 
    },
    description: {
        fontSize: 11,
        textAlign: 'center',
        color: '#00093C', 
        fontWeight: 'bold', 
        marginBottom:80,
    },
});
