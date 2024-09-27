import { Pressable, Text, StyleSheet, Image, View, SafeAreaView } from "react-native";
import { Category } from "../types/category"
import { router } from "expo-router";

type Props = {
    data: Category;
}

export const CategoryItem = ({ data }: Props) => {
    const click = () => {
        router.navigate(`/categories/${data.id}`);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Pressable onPress={click} style={styles.container}>
                <Image
                    source={{ uri: data.cover }}
                    resizeMode="cover"
                    style={styles.image}
                />
                <View style={styles.bg}></View>
                <View style={styles.box}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        paddingTop: 0, 
        paddingBottom: 0,
        backgroundColor: '#ffffff',
        color:'#000A3E'
    },
    container: {
        width: '100%', 
        height: 150,   
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden', 
        position: 'relative' 
    },
    image: {
        width: '100%',
        height: '100%',
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "#000A3E",
        opacity: 0.3,
        borderRadius: 10,
    },
    box: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
    }
});
