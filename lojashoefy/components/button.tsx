import { Pressable,Text,StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({title, onPress}: Props) =>{
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#164E85',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    buttonText:{
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})