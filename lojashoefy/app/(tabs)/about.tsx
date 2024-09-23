import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

export default function Screen() {
    return (
        <SafeAreaView style={styles.safeArea}>
        

            <View style={styles.container}>
                <Text style={styles.title}>Diego do Nascimento Confessor</Text>
                <Text style={styles.description}>
                    Sou um estudante de Desenvolvimento de Sistemas no SENAC, com paixão por criar soluções eficientes e inovadoras. 
                    Meu foco é aprender e aplicar novos conhecimentos em programação, buscando sempre aprimorar minhas habilidades e contribuir para projetos desafiadores.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#333', 
    },
    foto: {
        width: '70%', 
        height: 400, 
        borderRadius: 100,
        marginTop:10, 
        alignSelf: 'center', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center', 
        color: '#FF0000', 
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FF0000', 
        fontWeight: 'bold', 
    },
    
});
